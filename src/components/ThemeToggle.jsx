import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const ThemeToggle = () => {
    const {currentTheme, setTheme} = useThemeStore();

    const toggleTheme = () => {
        const newTheme = currentTheme === 'lemonade' ? 'night' : 'lemonade';
        setTheme(newTheme);
    };

    const isNight = currentTheme === 'night';

  return (
     <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Theme </span>
            <button
                onClick={toggleTheme}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${
                    isNight ? 'bg-neutral' : 'bg-primary'
                }`}
            >
                <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                        isNight ? 'translate-x-6' : 'translate-x-0'
                    }`}
                />
            </button>
        </div>
  )
}

export default ThemeToggle