import "./Inauguracion.css";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCoffee,
} from "react-icons/fa";
import Countdown from "../components/Countdown";

function Inauguracion() {
  const handleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Garibaldi+y+Viamonte",
      "_blank"
    );
  };

  return (
    <section className="inauguracion">
      <div className="overlay"></div>

      <motion.h2
        className="inauguracion-titulo"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Te esperamos en nuestra inauguración
      </motion.h2>

      <motion.div
        className="inauguracion-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          <FaCalendarAlt className="icono" /> 6 de septiembre
        </p>
        <p>
          <FaClock className="icono" /> 17:30 horas
        </p>
        <p>
          <FaCoffee className="icono" /> 18:00 Break Coffe
        </p>
        <p>
          <FaMapMarkerAlt className="icono" /> Garibaldi y Viamonte
        </p>
      </motion.div>
      <Countdown targetDate="2025-09-06T17:30:00" />
      <motion.button
        className="boton-mapa"
        onClick={handleMaps}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Cómo llegar
      </motion.button>
      <motion.button
        className="boton-confirmar"
        onClick={() =>
          window.open(
            "https://wa.me/5493854721273?text=Hola Luis!%20Confirmo%20mi%20presencia%20en%20la%20inauguración%20de%20Natura%20Tu%20Essencia%20el%206%20de%20septiembre.",
            "_blank"
          )
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        viewport={{ once: true }}
      >
        Confirmar presencia
      </motion.button>
    </section>
  );
}

export default Inauguracion;
