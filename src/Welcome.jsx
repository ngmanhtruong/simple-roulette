import * as React from 'react'
import './App.css'
import { Box, Modal, Typography } from '@mui/material'
import Fade from '@mui/material/Fade'
import { AppContext } from './App';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  border: '2px solid #000',
  backgroundColor: '#242424',
  boxShadow: 24,
  p: 4,
};

function Welcome() {
  const {handlePhoneChange, phone, onCloseWelcome, open} = React.useContext(AppContext)

  const handleClose = () => {
    toast.info(`Welcome ${phone}`);
    onCloseWelcome();
  };

  return (
    <div className="welcome">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Welcome to lucky roulette
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, padding: '1rem 0' }}>
              Please enter your phone number to continue
            </Typography>
            <Box display="flex" justifyContent="center">
              <input type="text" placeholder="Your phone" className="phone-input" onChange={handlePhoneChange} />
            </Box>
            <Box display="flex" justifyContent="center">
              <button className="continue-button" onClick={handleClose}>
                Continue
              </button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default Welcome