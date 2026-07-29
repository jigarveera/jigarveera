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
            },

            fontFamily: {
                roboto: ['Roboto'],
                eduVic: ['Edu VIC WA NT Hand'],
                bjcree: ['BJCree'],
                openSans: ['Open Sans'],
                robotoMono: ['Roboto Mono'],
                archivoBlack: ['Archivo Black']
            }
        }
    }
}