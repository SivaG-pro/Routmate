import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ProductDetails } from './components/ProductDetails';
import { ProductList } from './components/ProductList';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/1001" element ={ <ProductDetails />}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
