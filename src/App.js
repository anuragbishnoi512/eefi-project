import './App.css';
import Bulls from './components/Bulls';
import Footer from './components/Footer';
import Hero from './components/Hero';
import RoadMap from './components/Roadmap';

function App() {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden'>
      <Hero />
      <Bulls />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
