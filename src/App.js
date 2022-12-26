import React, { useState } from 'react';
import Modal from 'react-modal';
import MobileSlider from './components/MobileSlider/MobileSlider';

import { AppRouter } from './router/AppRouter';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/global.scss';
import './styles/styles.scss';
import { popupStyles } from './styles/popupStyles';
import Preloader from './components/Preloader/Preloader';

Modal.setAppElement('#root');

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Preloader />
      <AppRouter />
      <Modal isOpen={isModalOpen} style={popupStyles}>
        <MobileSlider />
      </Modal>
    </>
  );
};

export default App;
