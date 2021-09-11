import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className=" w-100">
      <div style={{ padding: '30px 90px 30px 90px' }}>
        <Header></Header>
        <hr />
        <MainSection></MainSection>
        <Blog></Blog>
        <About />
      </div>
      <hr />
      <div style={{ padding: '30px 90px 30px 90px' }}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
