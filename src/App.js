import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Cookies from 'js-cookie';
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

  useEffect(() => {
    if (!Cookies.get('notification-shown')) {
      setIsModalOpen(true);
      Cookies.set('notification-shown', 'true');
    }
  }, []);

  const handlePopupClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Preloader />
      <AppRouter />
      <Modal
        isOpen={isModalOpen}
        style={popupStyles}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={handlePopupClose}
      >
        <MobileSlider handlePopupClose={handlePopupClose} />
      </Modal>
    </>
  );
};

export default App;
