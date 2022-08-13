import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header />
      <Container  className='mt-4'> 
        {/* <Home /> */}
        <SignUp />
      </Container>

    </div>
  );
}

export default App;
