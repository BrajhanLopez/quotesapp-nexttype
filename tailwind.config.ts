import type { Config } from 'tailwindcss'
//02. agregamos la fuente en font family

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
      fredokaOne: 'FredokaOne-Regular'
      },
      backgroundImage: {
        'image-green': "url('../assets/images/fondo1.jpg')",    
      },
    },
  },
  plugins: [],
}
export default config
