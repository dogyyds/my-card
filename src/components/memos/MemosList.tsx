import React from "react";
import { Memo } from "@/types";
import MemoCard from "./MemoCard";

interface MemosListProps {
  memos: Memo[];
  showTitle?: boolean;
}

const MemosList: React.FC<MemosListProps> = ({ memos, showTitle = true }) => {
  // 对备忘录按日期逆序排序（最新的在前面）
  const sortedMemos = [...memos].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="space-y-4">
      {showTitle && <h2 className="text-xl font-medium">备忘录</h2>}

      <div className="space-y-4">
        {sortedMemos.map((memo, index) => (
          <MemoCard key={memo.id} memo={memo} delay={index} />
        ))}
      </div>
    </div>
  );
};

export default MemosList;
