export const theme = {
  colors: {
    basic: {
      gray00: '#000000',
      gray10: '#010115',
      gray20: '#1C1F26',
      gray30: '#262B36',
      gray40: '#3E4656',
      gray50: '#969BAC',
      gray60: '#C4C8D3',
      gray70: '#D6D9DE',
      gray80: '#E4E5E9',
      gray90: '#F1F1F5',
      gray100: '#FFFFFF',
    },
    brand: {
      sub01: '#3E6DFE', // blue
      sub02: '#E44AEB', // pink
      sub03: '#6231CD', // purple
      sub04: '#FF6833', // orange
      main: 'linear-gradient(90deg, #336FFF -2.24%, #E44AEB 100%)',
      style01: 'linear-gradient(180deg, #92e4d3 0%, #a43ad4 100%)',
      style02:
        'linear-gradient(180deg, #4A9FEE 0%, #69B4B9 43.75%, #6653DA 100%)',
      style03: 'linear-gradient(180deg, #E6E19A 0%, #42A097 100%)',
    },
    background: {
      gradientBlack: 'linear-gradient(180deg, #00011C 0%, #000002 97.4%)',
    },
    state: {
      error: '#EA4D4D',
    },
  },
  fontSize: {
    head01: '32px',
    head02: '24px',
    title01: '22px',
    title02: '20px',
    large: '18px',
    body01: '16px',
    body02: '14px',
    caption: '13px',
  },
  height: {
    header: '69px',
    nav: '48px',
  },
  text: {
    ellipsis: (line: number) => {
      if (line > 1)
        return {
          display: '-webkit-box',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': String(line),
        };
      return {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      };
    },
  },
} as const;

export type ThemeType = typeof theme;
