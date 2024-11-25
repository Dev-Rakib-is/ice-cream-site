/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth:{
        navCont:'1320px',
      },
      fontFamily:{
         fnt:['Berkshire Swash'],
         pop:['Poppins'],
      },
      colors:{
        btnclr:'#F83D8E',
        txtclr:'#FFFFFF',
        pclr:'#0F0200',
        p2clr:'#646464',
        icnbg:'#683292',
        crdbg:'#FFF3EA',
        fmenuclr:'#CFB6E2',
      },
      backgroundImage:{
        banBg: "url('./assets/BannerBg.png')",
        clasicBg: "url('./assets/Classic.png')",
        prdctBg: "url('./assets/ProductBg.png')",
        offrBg: "url('./assets/OfferBg.png')",
        revwBg: "url('./assets/ReviewBg.png')",
        signupBg: "url('./assets/SignImg.png')",
        RevwBg: "url('./assets/FlowImg.png')",
        ftrBg: "url('./assets/FooterBG.png')",
      },
    },
  },
  plugins: [],
}

