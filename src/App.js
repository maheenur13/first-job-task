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
      <div className="container-lg container-md container-sm p-5-xs py-3">
        <Header></Header>
        <hr />
        <MainSection></MainSection>
        <Blog></Blog>
        <About />
      </div>
      <hr />
      <div className="container-lg container-md container-sm p-5-xs py-3">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
