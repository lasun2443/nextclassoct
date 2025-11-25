"use client";
import { motion } from "framer-motion";

export default function HeroMotion() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-5xl md:text-6xl font-bold text-green-800 leading-tight max-w-3xl"
    >
      Champions of great service
    </motion.h1>
  );
}
