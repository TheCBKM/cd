'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-4 lg:gap-6', className)}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
            <Link
            key={link.name}
            href={link.href}
            className={cn("text-sm font-medium transition-colors hover:text-primary", isActive && "text-primary font-bold")}
            >
            {link.name}
            </Link>
        );
      })}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-border' : ''
      )}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Leaf className="h-6 w-6 text-accent" />
          <span className="font-headline text-lg font-bold text-foreground">Chaitanya Enterprises</span>
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-end">
          <NavLinks />
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-accent" />
                  <span className="font-headline text-lg font-bold">Chaitanya Enterprises</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => {
                     const isActive = pathname === link.href;
                     return (
                        <SheetClose asChild key={link.name}>
                        <Link
                            href={link.href}
                            className={cn("text-lg font-medium transition-colors hover:text-primary", isActive && "text-primary font-bold")}
                        >
                            {link.name}
                        </Link>
                        </SheetClose>
                     )
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
