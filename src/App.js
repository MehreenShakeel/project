import Home from './components/Home/Home';
import Collections from './components/collections/Collections';
import TeamSection from './components/TeamSection/TeamSection';
import CsGoTeam from './components/CsGoTeam/CsGoTeam';
import CreatorsTeam from './components/CreatorsTeam/CreatorsTeam';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Home/>
     <Collections/>
     <TeamSection/>
     <CsGoTeam/>
     <CreatorsTeam/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App
