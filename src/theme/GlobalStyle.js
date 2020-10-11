import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'IstokWeb';
  src: local('IstokWeb'), url('./src/theme/fonts/IstokWeb-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Lora';
  src: local('Lora'), url('./src/theme/fonts/Lora-Regular.ttf') format('truetype');
}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'IstokWeb';

  }

    @-webkit-keyframes slide-right {
    0% {
        -webkit-transform: translateX(-100px);
                transform: translateX(-100px);
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    }
    @keyframes slide-right {
    0% {
        -webkit-transform: translateX(-100px);
                transform: translateX(-100px);
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    }

@-webkit-keyframes fade-in-bck {
  0% {
    -webkit-transform: translateZ(80px);
            transform: translateZ(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes fade-in-bck {
  0% {
    -webkit-transform: translateZ(80px);
            transform: translateZ(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}


`;

export default GlobalStyle;
