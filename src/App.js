import {Route} from 'react-router-dom';

//Pages
import loginPage from './pages/login.jsx'
import Header from './components/shared/header.jsx'
import productsPage from './pages/products.jsx'
import productDetailPage from './pages/product-detail.jsx'

//Global css
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss'

function App() {
  return (
    <div className="App">
      <Route path="/" render={(props) => (props.location.pathname !== "/") && <Header />}></Route>
      <Route exact path='/' component={loginPage}></Route>
      <Route exact path='/products' component={productsPage}></Route>
      <Route exact path='/product-detail' component={productDetailPage}></Route>
    </div>
  );
}

export default App;
