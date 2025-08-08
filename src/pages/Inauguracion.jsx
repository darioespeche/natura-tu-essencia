import "./Inauguracion.css";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

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
          <FaCalendarAlt className="icono" /> <strong>6 de septiembre</strong>
        </p>
        <p>
          <FaClock className="icono" /> <strong>18:00 horas</strong>
        </p>
        <p>
          <FaMapMarkerAlt className="icono" />{" "}
          <strong>Garibaldi y Viamonte</strong>
        </p>
      </motion.div>

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
    </section>
  );
}

export default Inauguracion;
