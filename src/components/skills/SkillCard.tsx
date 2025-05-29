import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/types";
import Icon from "@/components/common/Icon";

interface SkillCardProps {
  skill: Skill;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => {
  const { name, level, icon } = skill;

  const levelDots = Array(5)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < level ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
        }`}
      />
    ));

  return (
    <motion.div
      className="flex items-center space-x-3 p-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.05, duration: 0.3 }}
    >
      {icon && (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-button-light dark:bg-button-dark text-primary">
          <Icon name={icon} size={16} />
        </div>
      )}

      <div className="flex-grow">
        <div className="text-sm font-medium">{name}</div>
      </div>

      <div className="flex space-x-1">{levelDots}</div>
    </motion.div>
  );
};

export default SkillCard;
