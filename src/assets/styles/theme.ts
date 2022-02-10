export const theme = {
  colors: {
    blank: '#010115',
    gray00: '#000000',
    gray10: '#292A2C',
    gray20: '#1C1F26',
    gray30: '#3E4043',
    gray40: '#5B5D61',
    gray50: '#9B9EA5',
    gray60: '#C4C8D3',
    gray70: '#D6D9DE',
    gray80: '#E4E5E9',
    gray90: '#F1F1F5',
    gray100: '#FFFFFF',
    blue00: '#3E6DFE',
    purple00: '#553EF5',
    pink00: '#FF329B',
    pink01: '#E44AEB', // 어두운 핑크
    orange00: '#FF6833',
  },
  background: {
    main: 'linear-gradient(180deg, #00011C 0%, #000002 97.4%)',
    button00: 'linear-gradient(90deg, #E44AEB -2.24%, #142BFC 100%);',
    button01: 'linear-gradient(90deg, #336FFF -2.24%, #E44AEB 100%);',
    style01: 'linear-gradient(180deg, #92e4d3 0%, #a43ad4 100%)',
    style02:
      'linear-gradient(180deg, #4A9FEE 0%, #69B4B9 43.75%, #6653DA 100%)',
    style03: 'linear-gradient(180deg, #E4DD5F 0%, #56D9CC 100%)',
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
} as const;

export type ThemeType = typeof theme;
