import Home_page from './pages/Home_page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NewPage from './pages/NewPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
         <Route
           path='/'
           element={
            <Home_page/>
           }
         />

         <Route
          path='/new'
          element={
            <NewPage/>
          }
         />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
