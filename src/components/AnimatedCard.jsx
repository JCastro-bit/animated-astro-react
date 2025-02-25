import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">¡Tarjeta Animada!</h2>
        <p className="text-gray-600">
          Pasa el mouse por encima para ver el efecto hover
        </p>
      </motion.div>
    </div>
  );
}
