/* eslint-disable react/prop-types */
import { Box, Button, Modal } from "@mui/material";
import { useEffect, useState } from "react";
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

function Congratulations({ prize, opened }) {
  const [code, setCode] = useState("");

  const uuid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    setCode(`${s4()}-${s4()}-${s4()}`);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success('Copied to clipboard');
  }

  useEffect(() => {
    uuid();
  },[])

  return (
    <>
      <Modal        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" 
        open={opened} 
      >
        <Box sx={style}>
          <p id="modal-title">
            Congratulations
          </p>
          <p>You have won a {prize}!</p>
          <p>Your code for the prize: <span style={{ color: "gold" }}>{code}</span> </p>
          <Button onClick={handleCopy} variant="outlined">Copy your code</Button>
          <p>Please contact our staff to get the prize. Thank you!</p>
        </Box>
      </Modal>
    </>
  );
}

export default Congratulations