import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { useEffect } from 'react';
import { SteContextComponent } from './context/steContextComponent';

function App() {
  useEffect(() => {
    /*const loggedUserToken = window.localStorage.getItem('loggedUserToken');
    if (loggedUserToken) {
      console.log(decoded(loggedUserToken));
    }*/
  }, []);

  return (
    <SteContextComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </SteContextComponent>
  );
}

export default App;
