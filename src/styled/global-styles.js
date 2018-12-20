import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato');

  html{
      font-size:10px;
  }
  body {
    background-color: #000;
  }
  html,body{
      min-height:100vh
  }
  * {
      padding:0;
      margin:0;
      box-sizing:border-box;
  }
  .video-react-has-started .video-react-control-bar{
      display: none !important;
  }
  .video-react .video-react-big-play-button{
      display: none !important;
  }
  .video-react.video-react-fluid{
      outline: none;
  }
`

export default GlobalStyle;