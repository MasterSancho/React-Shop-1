import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Home_Screen from './screens/Home_Screen';

const App = () => {
 return (
  <>
   <Header />
   <main className='py-3'>
    <Container>
     <Home_Screen />
    </Container>
   </main>
   <Footer />
  </>
 );
};

export default App;
