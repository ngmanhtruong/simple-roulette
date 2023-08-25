import { useState, useContext } from 'react'
import { Wheel } from 'react-custom-roulette'
import Confetti from 'react-confetti'
import './App.css'
import { useWindowSize } from 'react-use';
import Applause from './assets/applause.mp3'
import ReactSound from 'react-sound';
import Congratulations from './CongratulationModal';
import { roulette } from '../data';
import { AppContext } from './App';

function Roulette() {
  const {phone} = useContext(AppContext)
  const { width, height } = useWindowSize()
  const [open, setOpen] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [prize, setPrize] = useState('');
  const [play, setPlay] = useState('STOPPED');

  const handleSpin = () => {
    setMustSpin(true);
  }

  const onStopSpinning = () => {
    setMustSpin(false);
    setConfetti(true);
    setPlay('PLAYING');
    setPrize('Mystery Gift')
    setOpen(true);

    setTimeout(() => {  
      setConfetti(false);
    }, 3000)

    setTimeout(() => {
      setPlay('STOPPED');
    }
    , 3000)
  }

  return (
    <>
      <>
        <div className="application">
          {phone !== "" && <p className="phone-number">Welcome <span style={{ color: "gold" }}>{phone}</span></p>}
          <p>Spin to get a prize!</p>
          <p className="glowing-text">Chances to get a mystery gift</p>
          <button className="spin-button" onClick={handleSpin}>GET YOUR PRIZE</button>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={2}
            data={roulette}
            outerBorderColor={["#ccc"]}
            outerBorderWidth={[9]}
            innerBorderColor={["#f2f2f2"]}
            radiusLineColor={["tranparent"]}
            radiusLineWidth={[1]}
            textColors={["#f5f5f5"]}
            backgroundColors={[
              "#3f297e",
              "#be1180",
              "#169ed8",
              "#3f297e",
              "#dc0936",
              "#efe61f",
              "#3f297e",
              "#be1180",
              "#dc0936",
              "#e5177b",
              "#be1180",
              "#871f7f"
            ]}
            onStopSpinning={() => {
              onStopSpinning();
            }}
          />
        </div>
        <Confetti
          hidden={!confetti}
          width={width}
          height={height}
        />
        <ReactSound 
          url={Applause}
          playStatus={play}
        />
      </>
      <Congratulations opened={open} prize={prize} />
    </>
  )
}

export default Roulette