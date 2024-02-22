import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

function CardAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card"
      style={{ borderRadius: "5px" }}
    >
      <motion.h2 layout="position">Framer Motion</motion.h2>
      {isOpen && (
        <motion.div className="width">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            cum maxime c recusandae alias adipisci beatae similique upiditate
            tempore,repellat provident! voluptatibus dignissimos iusto quos
            fugiat, sit perferendis maiores a magni
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            cum maxime c recusandae alias adipisci beatae similique upiditate
            tempore,repellat provident! voluptatibus dignissimos iusto quos
            fugiat, sit perferendis maiores a magni
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default CardAnimation;
