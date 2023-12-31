import { DeviceMediaTheme, DeviceTheme, Theme } from '@emotion/react';

const size: DeviceTheme = {
  fold: 350, // 갤럭시 폴드 최하 280px ~ 350px 소형 스마트폰 대응
  mobile: 768 + 80,
  tablet: 1200,
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device: DeviceMediaTheme = {
  fold: `@media only screen and (max-width: ${size.fold}px)`,
  mobile: `@media only screen and (max-width: ${size.mobile}px)`,
  tablet: `@media only screen and (max-width: ${size.tablet}px)`,
  pc: `@media only screen and (min-width: ${size.mobile}px)`,
};

export const theme: Theme = {
  color: {
    black: '#333333',
    white: '#FEFEFE',
    primary900: '#0A5D0B',
    primary800: '#167011',
    primary700: '#298B1B',
    primary600: '#40A627',
    primary500: '#5BC236',
    primary400: '#8BDA64',
    primary300: '#AFEC86',
    primary200: '#D3F8B1',
    primary100: '#EBFBD7',
    secondary900: '#785811',
    secondary800: '#916F1D',
    secondary700: '#B4902E',
    secondary600: '#D7B343',
    secondary500: '#FBD85D',
    secondary400: '#FCE485',
    secondary300: '#FDEC9D',
    secondary200: '#FEF4BE',
    secondary100: '#FEFADE',
    danger900: '#7A0B41',
    danger800: '#931245',
    danger700: '#B71D4B',
    danger600: '#DB2A4F',
    danger500: '#FF3A51',
    danger400: '#FF6B6E',
    danger300: '#FF9088',
    danger200: '#FFBCB0',
    danger100: '#FFE1D7',
    gray900: '#1C1C1E',
    gray800: '#2C2C2E',
    gray700: '#363639',
    gray600: '#48484A',
    gray500: '#636366',
    gray400: '#8E8E93',
    gray300: '#AEAEB2',
    gray200: '#C6C6C6',
    gray100: '#F4F4F4',
  },
  shadow: {
    hover: '0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
    active: '0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
    default:
      '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)',
  },
  device,
  size,
};
