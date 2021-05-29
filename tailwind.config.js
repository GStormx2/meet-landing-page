module.exports = {
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
      serif: ['serif']
    },
    fontSize: {
      base: ['18px', '26px'],
      md: ['32px', '36px'],
      lg: ['40px', '44px'],
      xl: ['64px', '64px'],
      'overline': ['16px', '26px']
    },
    extend: {
      colors: {
        'cgreen-dark' : 'hsl(192, 37%, 48%)',
        'cgreen-light': '#71C0D4',
        'cpurple-dark': 'hsl(268, 34%, 53%)',
        'cblack': 'hsl(240, 21%, 20%)',
        'cgray': 'hsl(240, 10%, 57%)',
        'cblue': 'hsl(192, 90%, 77%)',
        'cpurple-light': '#B18BDD',
        'cpurple-lighter': '#D9B8FF',
        'cwhite': 'hsl(0, 0%, 98%)',
        'pendulum': '#D8D8D8'
      },
      fontSize: {
        'lg-g': ['48px', '48px'],
      },
      width: {
        '110': '150%',
        '500': '500%'
      },
      maxWidth: {
        '1440': '1440px'
      },
      minWidth: {
        '375': '375px' 
      },
      maxHeight: {
        '308': '308px'
      },
      minHeight: {
        '140': '140px'
      },
      height: {
        '112': '112px',
        '428': '428px',
        'test' : '42vw' 
      },
      letterSpacing: {
        'overline': '4px'
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
