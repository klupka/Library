/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                slideLeftRight: "slideLeftRight 0.25s ease",
                slideRightLeft: "slideRightLeft 0.25s ease",
                fadeIn: "fadeIn 0.25s ease",
                enlarge: "enlarge 0.35s ease",
            },
            keyframes: {
                slideLeftRight: {
                    "0%": {
                        opacity: "0%",
                        transform: "translate(-5%, 0)",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                slideRightLeft: {
                    "0%": {
                        opacity: "0%",
                        transform: "translate(5%, 0)",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                fadeIn: {
                    "0%": {
                        opacity: "0%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                enlarge: {
                    "0%": {
                        opacity: "0%",
                        transform: "scale(0)",
                    },
                    "90%": {
                        opacity: "0%",
                        transform: "scale(0)",
                    },
                    "100%": {
                        opacity: "100%",
                        transform: "scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
