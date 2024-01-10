
import './App.css'
import Greeting from './components/greeting/Greeting';
import Menu from './components/menu/Menu';
import AboutMeInfo from './components/aboutMeInfo/AboutMeInfo';
import Contacts from './components/contacts/Contacts';
import Portfolio from './components/myPortfolio/Portfolio';
import Footer from './components/footer/Footer'






function App() {
  return (
    <div className="Container">
      <Menu/>
      <Greeting/>
      <AboutMeInfo/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
      </div>
      
 
    
  );
}

export default App;
