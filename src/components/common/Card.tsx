import React from "react";
// import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  animate?: boolean;
  delay?: number;
  stronger?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  animate = true,
  //   delay = 0,
  stronger = false,
}) => {
  // 极大简化动画，减轻滚动负担
  //   const cardVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         duration: 0.3,
  //         delay: delay * 0.05, // 减少延迟时间
  //       },
  //     },
  //   };

  // 如果不需要动画，直接返回静态 div
  if (!animate) {
    return (
      <div
        className={`${
          stronger ? "glass-card-stronger" : "glass-card"
        } p-6 ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  // 极大简化卡片组件，减少动画
  return (
    <div
      className={`${
        stronger ? "glass-card-stronger" : "glass-card"
      } p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
