import { createGlobalStyle } from 'styled-components';
// Open Sans Regular
import OpenSansRegularEOT from '../assets/fonts/openSansRegular.eot';
import OpenSansRegularSVG from '../assets/fonts/openSansRegular.svg';
import OpenSansRegularTTF from '../assets/fonts/openSansRegular.ttf';
import OpenSansRegularWoff from '../assets/fonts/openSansRegular.woff';
import OpenSansRegularWoff2 from '../assets/fonts/openSansRegular.woff2';

// Open Sans Bold
import OpenSansBoldEOT from '../assets/fonts/openSansBold.eot';
import OpenSansBoldSVG from '../assets/fonts/openSansBold.svg';
import OpenSansBoldTTF from '../assets/fonts/openSansBold.ttf';
import OpenSansBoldWoff from '../assets/fonts/openSansBold.woff';
import OpenSansBoldWoff2 from '../assets/fonts/openSansBold.woff2';

// Open Sans Black
import OpenSansBlackEOT from '../assets/fonts/openSansBlack.eot';
import OpenSansBlackSVG from '../assets/fonts/openSansBlack.svg';
import OpenSansBlackTTF from '../assets/fonts/openSansBlack.ttf';
import OpenSansBlackWoff from '../assets/fonts/openSansBlack.woff';
import OpenSansBlackWoff2 from '../assets/fonts/openSansBlack.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src:
      url('${OpenSansRegularWoff2}') format('woff2'),
      url('${OpenSansRegularWoff}') format('woff'),
      url('${OpenSansRegularEOT}') format('truetype'),
      url('${OpenSansRegularSVG}') format('svg'),
      url('${OpenSansRegularTTF}') format('embedded-opentype');
  }

  @font-face {
    font-family: 'Open Sans Bold';
    font-style: normal;
    font-weight: 600;
    src:
      url('${OpenSansBoldWoff2}') format('woff2'),
      url('${OpenSansBoldWoff}') format('woff'),
      url('${OpenSansBoldEOT}') format('truetype'),
      url('${OpenSansBoldSVG}') format('svg'),
      url('${OpenSansBoldTTF}') format('embedded-opentype');
  }

  @font-face {
    font-family: 'Open Sans Black';
    font-style: normal;
    font-weight: 800;
    src:
      url('${OpenSansBlackWoff2}') format('woff2'),
      url('${OpenSansBlackWoff}') format('woff'),
      url('${OpenSansBlackEOT}') format('truetype'),
      url('${OpenSansBlackSVG}') format('svg'),
      url('${OpenSansBlackTTF}') format('embedded-opentype');
  }

  html, body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
