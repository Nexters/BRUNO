export const theme = {
  colors: {
    gray00: '#000000',
    gray10: '#292A2C',
    gray20: '#333436',
    gray30: '#3E4043',
    gray40: '#5B5D61',
    gray50: '#9B9EA5',
    gray60: '#C8CACF',
    gray70: '#D7D9DD',
    gray80: '#E4E5E9',
    gray90: '#F2F2F4',
    gray100: '#FFFFFF',
  },
  background: {
    main: 'linear-gradient(180deg, #00011C 0%, #000002 97.4%)',
    button00: 'linear-gradient(90deg, #E44AEB -2.24%, #142BFC 100%);',
    button01: 'linear-gradient(90deg, #336FFF -2.24%, #E44AEB 100%);',
  },
  fontSize: {
    head01: '32px',
    head02: '24px',
    title01: '22px',
    title02: '20px',
    large: '18px',
    body01: '16px',
    body02: '14px',
    caption: '12px',
  },
} as const;

export type ThemeType = typeof theme;
