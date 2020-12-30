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
import PlaceOrderScreen from './screens/PlaceOrder_Screen';
import OrderScreen from './screens/Order_Screen';
import UserListScreen from './screens/UserList_Screen';
import UserEditScreen from './screens/UserEdit_Screen';
import ProductListScreen from './screens/ProductList_Screen';

const App = () => {
 return (
  <Router>
   <Header />
   <main className='py-3'>
    <Container>
     <Route path='/order/:id' component={OrderScreen} />
     <Route path='/shipping' component={ShippingScreen} />
     <Route path='/payment' component={PaymentScreen} />
     <Route path='/placeorder' component={PlaceOrderScreen} />
     <Route path='/login' component={LoginScreen} />
     <Route path='/profile' component={ProfileScreen} />
     <Route path='/register' component={RegisterScreen} />
     <Route path='/product/:id' component={ProductScreen} />
     <Route path='/cart/:id?' component={CartScreen} />
     <Route path='/admin/userlist' component={UserListScreen} />
     <Route path='/admin/user/:id/edit' component={UserEditScreen} />
     <Route path='/admin/productlist' component={ProductListScreen} />
     <Route path='/' component={HomeScreen} exact />
    </Container>
   </main>
   <Footer />
  </Router>
 );
};

export default App;
