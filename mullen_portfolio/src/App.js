
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// ............components.................
import Header from "./components/Header";


// .................pages..................
import Home from "./pages/Home";
import Connect from './pages/Connect';
import Projects from './pages/Projects';

// ................routes..................

function App() {
   return (
    <div className = "App">

     <Header />
     <Routes>
      <Route path='/' element={ <Home /> } />

{/* ..............connect with me routes....... */}
      <Route path='/connect'>
        <Route path='' element={<Connect />} />
      </Route>

{/* ............my highligted projects routes......... */}

      <Route path='/projects'>
        <Route path='' element={<Projects />} />
      </Route>


     </Routes>
    </div>
   );
}

export default App;
