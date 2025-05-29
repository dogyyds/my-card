import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  tooltip?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isActive = false,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
  tooltip,
}) => {
  return (
    <div className="relative group">
      <motion.button
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`flex items-center justify-center p-2 h-10 w-10 rounded-full 
          ${
            isActive
              ? "bg-primary text-white"
              : "bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200"
          } backdrop-blur-md transition-all duration-200 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          boxShadow: isActive ? "0 2px 8px rgba(14, 165, 233, 0.3)" : "none",
        }}
      >
        {children}
      </motion.button>

      {tooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {tooltip}
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
