import React from "react";
import {
  FiHome,
  FiUser,
  FiMail,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiExternalLink,
  FiGrid,
  FiList,
  FiStar,
  FiCode,
  FiServer,
  FiFeather,
  FiTool,
  FiFolder,
  FiEdit,
  FiSun,
  FiMoon,
  FiVideo,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// 创建图标映射对象
const IconMap: Record<string, React.ComponentType<any>> = {
  // Feather 图标
  FiHome,
  FiUser,
  FiMail,
  FiGithub,
  FiVideo,
  FiTwitter,
  FiLinkedin,
  FiExternalLink,
  FiGrid,
  FiList,
  FiStar,
  FiCode,
  FiServer,
  FiFeather,
  FiTool,
  FiFolder,
  FiEdit,
  FiSun,
  FiMoon,

  // Font Awesome 图标
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaCss3Alt,

  // Simple Icons
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,

  // Material Design 图标
  MdDesignServices,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

// 创建一个动态图标组件
const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
