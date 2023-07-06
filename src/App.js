import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { SteContextComponent } from './context/steContextComponent';
import { RoutesIndex } from './components/RoutesIndex';

function App() {
  return (
    <SteContextComponent>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </SteContextComponent>
  );
}

export default App;
