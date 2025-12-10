import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Twitter, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '../icons';

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="font-headline text-lg font-bold text-foreground">Chaitanya Enterprises</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Pure, organic, and eco-friendly products from the heart of nature.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-primary" />
                <a href="https://wa.me/919260369200" className="text-muted-foreground hover:text-foreground">(+91) 9260369200</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@chaitanyaenterprises.com" className="text-muted-foreground hover:text-foreground">info@chaitanyaenterprises.com</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Visit Us</h4>
            <address className="not-italic text-sm space-y-2">
               <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                    Chaitanya Enterprises<br />
                    Chaitanya Dham, Mandleshwar<br />
                    Teh: Maheshwar, Dist: Khargone (MP)<br />
                    451221
                </span>
               </div>
            </address>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} aria-label={social.name} className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground text-sm">
            <p>Visitors are welcome by prior appointment. Come experience organic farming and natural living at Chaitanyadham.</p>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chaitanya Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
