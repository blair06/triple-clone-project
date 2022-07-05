import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

import Theme from './Theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
    html{
      font-size: 10px;
    }
    body {
      width:100vw;
      min-width: 1200px;
      height:100vh;
      background-color:${Theme.background};
      margin: 0;
      min-width: 1200px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      }
`

export default GlobalStyle
