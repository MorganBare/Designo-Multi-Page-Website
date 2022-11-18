import GlobalStyle from './styles/GlobalStyle';
import Routing from "./Routing/Routing";
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routing/>
    </ThemeProvider>
    </>
  );
}

export default App;
