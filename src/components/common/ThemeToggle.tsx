import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
      className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </motion.button>
  );
};

export default ThemeToggle;
