import Header from './modules/shared/components/Header';
import Footer from './modules/shared/components/Footer';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Home } from './modules/home';

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
