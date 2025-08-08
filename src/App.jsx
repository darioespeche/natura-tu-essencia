import "./styles/global.css";
import Preloader from "./components/Preloader";
import { useRef, useState } from "react";
import Bienvenida from "./pages/Bienvenida";
import Historia from "./pages/Historia";
import Inauguracion from "./pages/Inauguracion";
import MensajeLuis from "./pages/MensajeLuis";
import Cierre from "./pages/Cierre";

import backgroundMusic from "./assets/music-relax.m4a";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="app">
      <Preloader />
      <audio ref={audioRef} src={backgroundMusic} loop />
      <Bienvenida onToggleMusic={toggleMusic} isPlaying={isPlaying} />
      <Historia />
      <Inauguracion />
      <MensajeLuis />
      <Cierre />
    </div>
  );
}

export default App;
