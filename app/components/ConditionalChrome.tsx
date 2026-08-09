'use client';

import { usePathname } from 'next/navigation';
import Navbar from './nav/Navbar';
import Footer from './Footer';

// Paths that render WITHOUT the site nav/footer — standalone, detached landing pages.
// None currently; add future bare routes here.
const BARE_PATHS: string[] = [];

const isBare = (pathname: string | null) =>
    !!pathname && BARE_PATHS.includes(pathname);

export function ConditionalNavbar() {
    const pathname = usePathname();
    if (isBare(pathname)) return null;
    return (
        <div>
            <Navbar />
        </div>
    );
}

export function ConditionalFooter() {
    const pathname = usePathname();
    if (isBare(pathname)) return null;
    return <Footer />;
}
