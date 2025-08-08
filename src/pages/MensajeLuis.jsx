import "./MensajeLuis.css";
import { motion } from "framer-motion";

function MensajeLuis() {
  return (
    <section className="mensaje-luis">
      <motion.h2
        className="mensaje-titulo"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Un mensaje especial
      </motion.h2>

      <motion.p
        className="mensaje-texto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Gracias por acompañarme todos estos años, por confiar en mi trabajo y
        por ser parte de este camino. Hoy nace{" "}
        <strong>Natura tu Essencia</strong>, un espacio creado con amor,
        dedicación y compromiso.
        <br />
        <br />
        ¡Los espero para compartir esta nueva etapa juntos!
      </motion.p>

      <motion.p
        className="firma-luis"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        – Luis Cisterna
      </motion.p>
    </section>
  );
}

export default MensajeLuis;
