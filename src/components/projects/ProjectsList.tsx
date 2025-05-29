import React from "react";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
  projects: Project[];
  showTitle?: boolean;
  forceListMode?: boolean;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  showTitle = true,
  //   forceListMode = false,
}) => {
  // 始终使用列表模式
  const viewMode = "list";

  return (
    <div className="space-y-4">
      {showTitle && <h2 className="text-xl font-medium">项目展示</h2>}

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            layout={viewMode}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
