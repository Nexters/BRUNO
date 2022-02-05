import { createGlobalStyle } from 'styled-components';
import SansitaSwashed from './SansitaSwashed.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: "Sansita Swashed";
        src: local("Sansita Swashed"),
        url(${SansitaSwashed}) format('woff2');
        font-weight: 400;
        font-style: normal;
    };
`;
