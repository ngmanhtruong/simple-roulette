
import React from 'react';
import Roulette from './Roulette';
import Welcome from './Welcome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// create Provider
export const AppContext = React.createContext();
// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [welcomeOpen, setWelcomeOpen] = React.useState(true);
  const [phone, setPhone] = React.useState('');
  const handleClose = () => setWelcomeOpen(false);

  const inputValidation = () => {
    const input = document.querySelector('.phone-input');
    const inputValue = input.value;

    const regex = /^(\+)?([ 0-9]){10,14}$/;
    const isValid = regex.test(inputValue);
    
    if (!isValid) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleCloseWelcome = () => {
    setWelcomeOpen(false);
  }

  return (
    <AppContext.Provider value={{ open: welcomeOpen, handleClose, inputValidation, phone, handlePhoneChange, onCloseWelcome: handleCloseWelcome }}>
      {children}
    </AppContext.Provider>
  )
}

function App() {
  return (
    <AppProvider>
      <Welcome />
      <Roulette />
      <ToastContainer />
    </AppProvider>
  )
}

export default App
