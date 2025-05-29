import React from "react";
import Card from "@/components/common/Card";
import { Project } from "@/types";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  layout: "grid" | "list";
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  //   layout,
  delay,
}) => {
  const { title, description, imageUrl, tags, links, featured } = project;

  // 始终使用列表布局，并优化性能
  return (
    <Card
      className="flex overflow-hidden"
      delay={delay}
      // 减少不必要的动画
      animate={delay < 5} // 只有前5个项目有动画
    >
      {imageUrl && (
        <div className="w-1/4 flex-shrink-0 mr-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy" // 延迟加载图片
          />
        </div>
      )}

      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">{title}</h3>
          {featured && <span className="visionpro-tag text-primary">精选</span>}
        </div>

        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="visionpro-tag">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="visionpro-tag">+{tags.length - 3}</span>
          )}
        </div>

        <div className="flex gap-4">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs"
            >
              <FiExternalLink className="mr-1" size={12} />
              预览
            </a>
          )}

          {links.source && (
            <a
              href={links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs"
            >
              <FiGithub className="mr-1" size={12} />
              源码
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
