tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'SF Pro Text', 'Helvetica Neue', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            colors: {
                brand: {
                    dark: '#1E293B',
                    accent: '#3B82F6',
                    accentHover: '#2563EB',
                    textDark: '#F1F5F9'
                },
            },
            backgroundImage: {
                grid: "repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 20px)",
                hero: "linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)"
            }
        }
    }
}