import React from "react";
import { motion } from "framer-motion";

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className = "",
  center = false,
}) => {
  return (
    <motion.div
      className={`inline-flex bg-gray-100/15 dark:bg-gray-800/20 backdrop-blur-lg rounded-full p-1.5 gap-1.5 ${
        center ? "mx-auto" : ""
      } ${className}`}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ButtonGroup;
