import React, { useState } from "react";
import ButtonGroup from "@/components/common/ButtonGroup";
import Button from "@/components/common/Button";
import { Skill } from "@/types";
import { motion } from "framer-motion";
import Icon from "@/components/common/Icon";
import { FiCode, FiServer, FiFeather } from "react-icons/fi";

interface SkillsListProps {
  skills: Skill[];
  showTitle?: boolean;
}

type FilterCategory = "frontend" | "backend" | "design" | "other";

const SkillsList: React.FC<SkillsListProps> = ({
  skills,
  showTitle = true,
}) => {
  // 默认显示前端技能
  const [category, setCategory] = useState<FilterCategory>("frontend");

  // 按类别过滤技能
  const filteredSkills = skills.filter((skill) => skill.category === category);

  // 按技能等级排序
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);

  return (
    <div className="space-y-4">
      {showTitle && (
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">技能</h2>
          <ButtonGroup>
            <Button
              isActive={category === "frontend"}
              onClick={() => setCategory("frontend")}
              ariaLabel="前端技能"
              tooltip="前端"
            >
              <FiCode />
            </Button>
            <Button
              isActive={category === "backend"}
              onClick={() => setCategory("backend")}
              ariaLabel="后端技能"
              tooltip="后端"
            >
              <FiServer />
            </Button>
            <Button
              isActive={category === "design"}
              onClick={() => setCategory("design")}
              ariaLabel="设计技能"
              tooltip="设计"
            >
              <FiFeather />
            </Button>
          </ButtonGroup>
        </div>
      )}

      <div className="glass-card p-4">
        <div className="grid grid-cols-2 gap-3 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
          {sortedSkills.length > 0 ? (
            sortedSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="flex items-center gap-2 p-1.5"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.2 }}
              >
                {skill.icon && (
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100/20 dark:bg-gray-800/30 text-primary">
                    <Icon name={skill.icon} size={14} />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate">
                    {skill.name}
                  </div>
                  <div className="flex mt-1 space-x-0.5">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < skill.level
                              ? "bg-primary"
                              : "bg-gray-300/30 dark:bg-gray-600/30"
                          }`}
                        />
                      ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
              该分类下暂无技能
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
