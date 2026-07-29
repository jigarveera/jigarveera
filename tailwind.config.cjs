module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                text: "var(--text)",
                card: "var(--card)",
            }
        }
    }
}