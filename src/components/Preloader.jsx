import "./Preloader.css";
import logo from "../assets/U essencia.png";
import { useEffect, useState } from "react";

function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className="preloader">
      <img
        src={logo}
        alt="Logo Natura Tu Essencia"
        className="preloader-logo"
      />
      <p className="preloader-texto">Natura tu essencia...</p>
    </div>
  );
}

export default Preloader;
