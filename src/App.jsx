/** @format */

import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Journey from './components/Journey';
import UserInfo from './components/UserInfo';
import WhoWeAre from './components/WhoWeAre';
import BackButtonModal from './components/ui/Modal';

function App() {
  console.log(window.innerWidth);
  return (
    <>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <Journey />
      <Feature />
      <UserInfo />
      <Footer />
      <BackButtonModal />
    </>
  );
}

export default App;
