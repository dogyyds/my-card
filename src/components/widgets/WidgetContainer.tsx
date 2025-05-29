import React from "react";
import { motion } from "framer-motion";
import { WidgetConfig, WidgetType } from "@/types";

// 导入各种小部件组件
import ProjectsList from "@/components/projects/ProjectsList";
import MemosList from "@/components/memos/MemosList";
import SkillsList from "@/components/skills/SkillsList";
import NavigationLinks from "@/components/navigation/NavigationLinks";
import GithubActivity from "@/components/github/GithubActivity";
// import ProfileCard from "@/components/profile/ProfileCard";

// 导入数据
import { projectsData } from "@/data/projects";
import { memosData } from "@/data/memos";
import { skillsData } from "@/data/skills";
import { navigationLinks } from "@/data/navigation";
import { profileData } from "@/data/profile";

interface WidgetContainerProps {
  config: WidgetConfig;
  className?: string;
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({
  config,
  className = "",
}) => {
  const { type, title } = config;

  // 根据小部件类型渲染相应的组件
  const renderWidget = () => {
    switch (type) {
      case WidgetType.Projects:
        return <ProjectsList projects={projectsData} showTitle={false} />;

      case WidgetType.Memos:
        return <MemosList memos={memosData} showTitle={false} />;

      case WidgetType.Skills:
        return <SkillsList skills={skillsData} showTitle={false} />;

      case WidgetType.Navigation:
        return <NavigationLinks links={navigationLinks} showTitle={false} />;

      case WidgetType.Github:
        const username =
          profileData.social
            .find((s) => s.id === "github")
            ?.url.split("/")
            .pop() || "";
        return <GithubActivity username={username} />;

      default:
        return <div>未知小部件类型</div>;
    }
  };

  return (
    <motion.div
      className={`widget-container ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {renderWidget()}
    </motion.div>
  );
};

export default WidgetContainer;
