import "./Historia.css";
import { motion } from "framer-motion";

function Historia() {
  return (
    <section className="historia">
      <motion.h2
        className="historia-titulo"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        El alma del aroma
      </motion.h2>

      <motion.p
        className="historia-texto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Cada fragancia es una historia contada con notas invisibles.
      </motion.p>

      <motion.p
        className="historia-texto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        En <strong>Natura tu Essencia</strong>, creemos que el aroma es una
        forma de expresión, de conexión, de identidad.
      </motion.p>

      <motion.p
        className="historia-firma"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        viewport={{ once: true }}
      >
        Fragancias que hablan de vos.
      </motion.p>
    </section>
  );
}

export default Historia;
