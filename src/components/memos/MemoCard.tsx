import React from "react";
import Card from "@/components/common/Card";
import { Memo } from "@/types";
import { formatDate } from "@/utils/formatters";

interface MemoCardProps {
  memo: Memo;
  delay: number;
}

// 简化版Markdown解析器
const parseMarkdown = (text: string) => {
  // 步骤1: 处理链接 [文本](URL)
  let result = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match, text, url) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-light hover:underline">${text}</a>`
  );

  // 步骤2: 处理删除线 --文字--
  result = result.replace(/--([^-]+)--/g, "<del>$1</del>");

  // 步骤3: 处理行内代码 `文字`
  result = result.replace(
    /`([^`]+)`/g,
    '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>'
  );

  // 步骤4: 处理加粗 **文字**
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  return result;
};

const MemoCard: React.FC<MemoCardProps> = ({ memo, delay }) => {
  const { content, date, tags } = memo;

  return (
    <Card delay={delay}>
      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-2">
        {formatDate(date)}
      </p>

      {/* 使用dangerouslySetInnerHTML渲染解析后的内容 */}
      <p
        className="mb-3"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
      />

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="visionpro-tag">
            #{tag}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default MemoCard;
