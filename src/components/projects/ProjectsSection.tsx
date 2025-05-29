import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonGroup from "@/components/common/ButtonGroup";
import Button from "@/components/common/Button";
import ProjectsList from "@/components/projects/ProjectsList";
import MemosList from "@/components/memos/MemosList";
// import ScrollArrow from "@/components/common/ScrollArrow";
import { Project, Memo } from "@/types";
import { FiFolder, FiFileText, FiChevronDown } from "react-icons/fi";

interface ProjectsSectionProps {
  projects: Project[];
  memos: Memo[];
}

type ContentType = "projects" | "memos";

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  memos,
}) => {
  const [contentType, setContentType] = useState<ContentType>("projects");
  const containerRef = useRef<HTMLDivElement>(null);

  // 简化的动画配置
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <ButtonGroup center>
          <Button
            isActive={contentType === "projects"}
            onClick={() => setContentType("projects")}
            ariaLabel="项目"
            tooltip="项目"
          >
            <FiFolder />
          </Button>
          <Button
            isActive={contentType === "memos"}
            onClick={() => setContentType("memos")}
            ariaLabel="备忘录"
            tooltip="备忘录"
          >
            <FiFileText />
          </Button>
        </ButtonGroup>
      </div>

      <div className="relative" style={{ height: "800px" }}>
        {/* 添加 no-scrollbar 类来隐藏滚动条 */}
        <div
          className="content-container overflow-y-auto h-full no-scrollbar"
          ref={containerRef}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={contentType}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
              transition={{ duration: 0.2 }}
              className="pb-16" // 增加底部空间给箭头
            >
              {contentType === "projects" && (
                <ProjectsList
                  projects={projects}
                  showTitle={false}
                  // 始终使用列表模式，不提供切换选项
                  forceListMode={true}
                />
              )}

              {contentType === "memos" && (
                <MemosList memos={memos} showTitle={false} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 移除蓝色圆形背景，只保留箭头图标 */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center animate-bounce"
          style={{
            display:
              containerRef.current &&
              containerRef.current.scrollHeight >
                containerRef.current.clientHeight &&
              containerRef.current.scrollTop <
                containerRef.current.scrollHeight -
                  containerRef.current.clientHeight -
                  20
                ? "flex"
                : "none",
          }}
        >
          <FiChevronDown size={24} className="text-white/70" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
