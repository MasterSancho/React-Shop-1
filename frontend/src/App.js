import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/Home_Screen';
import ProductScreen from './screens/Product_Screen';
import CartScreen from './screens/Cart_Screen';
import LoginScreen from './screens/Login_Screen';
import RegisterScreen from './screens/Register_Screen';
import ProfileScreen from './screens/Profile_Screen';
import ShippingScreen from './screens/Shipping_Screen';
import PaymentScreen from './screens/Payment_Screen';

const App = () => {
 return (
  <Router>
   <Header />
   <main className='py-3'>
    <Container>
     <Route path='/shipping' component={ShippingScreen} />
     <Route path='/payment' component={PaymentScreen} />
     <Route path='/login' component={LoginScreen} />
     <Route path='/profile' component={ProfileScreen} />
     <Route path='/register' component={RegisterScreen} />
     <Route path='/product/:id' component={ProductScreen} />
     <Route path='/cart/:id?' component={CartScreen} />
     <Route path='/' component={HomeScreen} exact />
    </Container>
   </main>
   <Footer />
  </Router>
 );
};

export default App;
