import './App.css';
import About from './components/About';
import { ContactUs } from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
