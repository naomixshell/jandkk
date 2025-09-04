"use client";

import Link from 'next/link';
import { Smartphone, Laptop, Building2, Target, Info, Mail, Flag } from 'lucide-react';

const footerLinks = {
  Company: [
    { href: '/company', label: 'About Us', icon: Building2 },
    { href: '/mission', label: 'Mission & Vision', icon: Flag },
    { href: '/future-plans', label: 'Future Plans', icon: Target },
  ],
  Products: [
    { href: '/products', label: 'All Products', icon: Smartphone },
    { href: '/products/mobiles', label: 'Mobile Phones', icon: Smartphone },
    { href: '/products/laptops', label: 'Laptops', icon: Laptop },
  ],
  Support: [
    { href: '/contact', label: 'Contact Us', icon: Mail },
    { href: '/about', label: 'About', icon: Info },
    { href: '/verification', label: 'Verification', icon: Building2 },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              J&K株式会社
            </h3>
            <p className="text-gray-400 mb-4">
              Leading company specializing in apparel design, automotive equipment, and CAD solutions based in Saitama, Japan.
            </p>
            <div className="text-sm text-gray-500">
              <p>© 2025 J&K株式会社. All rights reserved.</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2"
                      >
                        <Icon size={16} />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-wrap justify-center space-x-8 text-sm text-gray-500">
            <span>🇯🇵 Headquarters: Saitama, Japan</span>
            <span>📍 Kita-cho 1-16-12, Honda Mansion</span>
            <span>🏢 Company No: 0300-01-149220</span>
          </div>
        </div>
      </div>
    </footer>
  );
}