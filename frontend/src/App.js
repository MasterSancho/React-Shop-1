import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/Home_Screen';
import ProductScreen from './screens/Product_Screen';

const App = () => {
 return (
  <Router>
   <Header />
   <main className='py-3'>
    <Container>
     <Route path='/' component={HomeScreen} exact />
     <Route path='/product/:id' component={ProductScreen} exact />
    </Container>
   </main>
   <Footer />
  </Router>
 );
};

export default App;