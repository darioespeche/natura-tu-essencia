import "./Cierre.css";
import { motion } from "framer-motion";
import cupon from "../assets/cupon5.png";

function Cierre() {
  const descargarCupon = () => {
    const link = document.createElement("a");
    link.href = cupon;
    link.download = "cupon-natura-tu-essencia.png";
    link.click();
  };

  return (
    <section className="cierre">
      <motion.h2
        className="cierre-titulo"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        ¡Gracias por acompañarnos!
      </motion.h2>

      <motion.p
        className="cierre-texto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Como agradecimiento, te regalamos un{" "}
        <strong>cupón del 5% de descuento</strong> en cualquier producto de la
        tienda (excepto sección outlet) el día de la inauguracion.
        <br />
        <br />
        ¡Mostralo en el local y aprovechalo!
      </motion.p>

      <motion.button
        className="boton-descarga"
        onClick={descargarCupon}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Descargar cupón
      </motion.button>
    </section>
  );
}

export default Cierre;
