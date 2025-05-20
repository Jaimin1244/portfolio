import { create } from "zustand";

export const useThemeStore = create((set) => ({
    currentTheme : 'light',
    setTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        set({currentTheme: theme});
    },

    initTheme: () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        set({currentTheme: savedTheme});
    },
}));