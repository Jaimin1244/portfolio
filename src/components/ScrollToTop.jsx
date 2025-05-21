import { useEffect, useState } from 'react'
import { ArrowUpFromDot } from 'lucide-react';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-2 sm:p-3 rounded-full bg-primary text-white 
             hover:bg-secondary hover:scale-105 active:scale-95 shadow-lg transition-all duration-300
             sm:bottom-8 sm:right-8"
            aria-label="Scroll to top"
        >
            <ArrowUpFromDot className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

    )
}

export default ScrollToTop