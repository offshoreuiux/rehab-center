/** @format */

import { useEffect, useState } from 'react';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Journey from './components/Journey';
import UserInfo from './components/UserInfo';
import WhoWeAre from './components/WhoWeAre';
import SubscribeModal from './components/ui/SubscribeModal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(false);
  const handleConfirm = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setModalOpen(true);
    }, 10000);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <Journey />
      <Feature />
      <UserInfo />
      <Footer />
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default App;
