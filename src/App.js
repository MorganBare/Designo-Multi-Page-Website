import GlobalStyle from './styles/GlobalStyle';
import { DarkButton, LightButton } from "./styles/Buttons"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <DarkButton>Learn More</DarkButton>
      <LightButton>Learn More</LightButton>
    </div>
  );
}

export default App;
