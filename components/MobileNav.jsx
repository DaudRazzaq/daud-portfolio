"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center p-3 focus:outline-none">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center p-6 w-full max-w-xs bg-black shadow-lg">
                {/* Logo */}
                <div className='mt-10 mb-10 text-center'>
                    <Link href='/'>
                        <h1 className='text-3xl font-semibold'>Daud<span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                
                {/* Navigation */}
                <nav className='flex flex-col items-center gap-6 w-full'>
                    {links.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index} 
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