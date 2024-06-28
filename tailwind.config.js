/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,tsx}",
      "./src/*.{js, ts, tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            filsonBody: ["filsonBody", "sans-serif"],
            museoBody: ["MuseoBody", "sans-serif"],
            filsonHeader: ["FilsonHeader", "sans-serif"],
            museoHeader: ["MuseoHeader", "sans-serif"],
        },

        colors: {
            "midBlue" : '#1F429F',
            "darkBlue" : '#1A275D',
            "darkestBlue" : '#0D132D',
            "lightPurple" : '#6475F8',
            "offWhite" : '#F2F3F7',
            "pastelGreen" : '#66F8BC',
            "SunshineBlue" : "#4CD3F7",

            "Primary" : '#FFFFFF',
            "Secondary" : '#4CD3F7',
            "Accent" : '#6475F8',
            "Background" : "#1A275D",
            "TextColor" : "#F2F3F7",

            "BackgroundDark" : "#0D132D",
            "BackgroundLight" : "#1F429F",






        }

    },
  },
  plugins: [],
}

