import "./Contenido.css";
import Superior from "./Superior";
import Mitad from "./Mitad";
import Infeior from "./Inferior";

const Contenido = () => {
  return (
    <section className="Contenido">
      <Superior />
      <Mitad />
      <Infeior />
    </section>
  );
};

export default Contenido;
