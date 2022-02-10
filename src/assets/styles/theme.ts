export const theme = {
  colors: {
    blank: '#010115',
    gray00: '#000000',
    gray10: '#292A2C',
    gray20: '#1A1C2C',
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
    button00: 'linear-gradient(90deg, #336FFF -2.24%, #E44AEB 100%);',
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
    caption: '13px',
  },
  height: {
    header: '69px',
    nav: '48px',
  },
  text: {
    ellipsis: (line: number) => {
      if (line === 1 || !line)
        return {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        };
      return {
        display: '-webkit-box',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': String(line),
      };
    },
  },
} as const;

export type ThemeType = typeof theme;
