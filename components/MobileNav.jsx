"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

    // Function to handle link click and close menu with 1-second delay
    const handleLinkClick = () => {
        setTimeout(() => setIsOpen(false), 1000); // Added 1-second delay before closing the menu
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* Menu button to toggle mobile navigation */}
            <SheetTrigger className="flex justify-center items-center p-3 focus:outline-none" onClick={() => setIsOpen(true)}>
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            
            <SheetContent className="flex flex-col items-center p-6 w-full max-w-xs bg-black shadow-lg">
                {/* Logo */}
                <div className='mt-10 mb-10 text-center'>
                    <Link href='/' onClick={handleLinkClick}> {/* Ensures menu closes after clicking the logo */}
                        <h1 className='text-3xl font-semibold'>Daud<span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                
                {/* Navigation */}
                <nav className='flex flex-col items-center gap-6 w-full'>
                    {links.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index} 
                            onClick={handleLinkClick} // Close menu with delay when clicking a link
                            className={`w-full text-center text-lg capitalize py-2 transition-all ${link.path === pathname ? "text-accent border-b-2 border-accent" : "hover:text-accent"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
