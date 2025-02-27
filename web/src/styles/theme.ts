// 테마 관련 변수 및 타입 정의
export const colors = {
  primary: '#FF7710', // 멋사 오렌지
  secondary: '#ffffff',
  background: '#000000',
  text: {
    primary: '#ffffff',
    secondary: '#aaaaaa',
    highlight: '#FF7710',
  },
  button: {
    primary: '#FF7710',
    hover: '#FF8930',
    active: '#E66700',
  }
};

export const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '24px',
  xxxl: '32px',
  banner: '50px',
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
  extraBold: 800,
};

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
};

export const zIndices = {
  base: 0,
  content: 1,
  overlay: 10,
  modal: 100,
  tooltip: 1000,
};

const theme = {
  colors,
  fontSizes,
  fontWeights,
  breakpoints,
  spacing,
  zIndices,
};

export default theme;
