import "./Bienvenida.css";
import { motion } from "framer-motion";
import { RiMusicFill } from "react-icons/ri";
import logo from "../assets/U essencia.png";

function Bienvenida({ onToggleMusic, isPlaying }) {
  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="bienvenida">
      <div className="overlay"></div>

      <motion.img
        src={logo}
        alt="Logo Natura tu Essencia"
        className="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.h1
        className="titulo"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        Bienvenidos a <br />
        <span className="destacado">Natura Tu Essencia</span>
      </motion.h1>

      <motion.p
        className="subtitulo"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Donde cada aroma cuenta una historia
      </motion.p>

      <motion.button
        className="boton-ingresar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        onClick={scrollToNextSection}
      >
        Descubrí la experiencia
      </motion.button>

      <button
        className={`boton-musica ${isPlaying ? "activo" : ""}`}
        onClick={onToggleMusic}
        aria-label="Controlar música"
      >
        <RiMusicFill />
      </button>
    </section>
  );
}

export default Bienvenida;
