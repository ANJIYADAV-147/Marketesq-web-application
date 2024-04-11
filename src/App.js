import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ClassesPage from './components/ClassesPage';
import ProductsPage from './components/ProductsPage';
import AboutUs from './components/AboutUs';

const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/classes' element={<ClassesPage/>}/>
      <Route exact path='/products' element={<ProductsPage/>}/>
      <Route exact path='/aboutus' element={<AboutUs/>}/>
      </Routes>
  </BrowserRouter>
)

export default App;
