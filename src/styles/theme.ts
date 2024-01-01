const PALETTE = {
  yellow: '#ffd75e',
  yellowAccent: '#ffa659',
  white: '#ffffff',
  black: '#000000',

  gray100: '#f6f6f6',
  gray200: '#dddddd',
  gray300: '#a0aec0',
  gray400: '#68768a',
  gray500: '#495467',
  gray600: '#2d3748',
  gray700: '#1a202c',

  primary100: '#edeafc',
  primary200: '#bcb2f5',
  primary300: '#816eec',
  primary400: '#3b1de2',
  primary500: '#24128a',
};
// const DARK_PALETTE = {
//   black: '#222425',

//   gray100: '#303136',
//   gray200: '#3d4144',
//   gray300: '#d6cfc4',
//   gray400: '#b8ae9f',
//   gray500: '#cfc8bc',
//   gray600: '#e5dfd6',
//   gray700: '#f6f1ea',

//   primary100: '#edeafc',
//   primary200: '#b9acff',
//   primary300: '#816eec',
//   primary400: '#3b1de2',
//   primary500: '#221182',

//   backgroundColor: '$black',

//   borderGray: '$gray200',
//   borderPrimary: '$primary200',

//   link: '$primary200',

//   titleFilterBackground: '$gray200',
//   tagColor: '$primary400',
//   tagFilterBackground: '$primary100',

//   headerCircleColor: '$gray200',
// };

// const transitions = {
//   transitionDuration: '0.2s',
//   transitionTiming: 'ease-in',
//   switchTransitionDuration: '0.1s',
// };

const theme = {
  borderGray: PALETTE.gray200,
  borderPrimary: PALETTE.primary200,
  link: PALETTE.primary400,
  titleFilterBackground: PALETTE.gray100,
  tagColor: PALETTE.primary400,
  tagFilterBackground: PALETTE.primary100,
  headerCircleColor: PALETTE.primary200,
  themeSwitchBackground: PALETTE.gray500,

  PALETTE,
};

export default theme;
