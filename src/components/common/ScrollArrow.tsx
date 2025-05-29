import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ScrollArrowProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScroll = () => {
      // 如果内容高度大于容器高度，且未滚动到底部，则显示箭头
      const isScrollable = container.scrollHeight > container.clientHeight;
      const isNotAtBottom =
        container.scrollTop <
        container.scrollHeight - container.clientHeight - 20;

      setIsVisible(isScrollable && isNotAtBottom);
    };

    // 初始检查
    checkScroll();

    // 监听滚动事件
    container.addEventListener("scroll", checkScroll);

    // 监听内容变化
    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });

    resizeObserver.observe(container);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  // 直接插入到DOM中而不是使用position:absolute，确保它显示在正确位置
  if (!isVisible) return null;

  return (
    <div className="scroll-arrow visible">
      <FiChevronDown size={18} color="white" />
    </div>
  );
};

export default ScrollArrow;
