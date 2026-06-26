'use client';

import { usePathname } from 'next/navigation';
import Navbar from './nav/Navbar';
import Footer from './Footer';

// Paths that render WITHOUT the site nav/footer — standalone, detached landing pages.
// Keep in sync with any other "bare" routes. /rvupilot-ortho is an invisible cold-email landing.
const BARE_PATHS = ['/rvupilot-ortho'];

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
