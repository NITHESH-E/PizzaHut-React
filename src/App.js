import Home_page from './pages/Home_page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {NewPage }from './pages/NewPage';
import Menupage from './components/Menupage';
import Order from './components/Order';
import Aboutus from './components/Aboutus';

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

        <Route
          path='/menu'
          element={
            <Menupage/>
          }
         />
         <Route
         path='/order'
         element={
          <Order/>
         }/>

         <Route
         path='/aboutus'
         element={
          <Aboutus/>
         }/>

         <Route
         path='/home'
         element={
          <Home_page/>
         }/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
