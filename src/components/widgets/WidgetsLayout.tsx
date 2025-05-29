import React from "react";
import { useResponsive } from "@/hooks/useResponsive";
import { WidgetConfig } from "@/types";
import WidgetContainer from "./WidgetContainer";

interface WidgetsLayoutProps {
  widgets: WidgetConfig[];
}

const WidgetsLayout: React.FC<WidgetsLayoutProps> = ({ widgets }) => {
  const { isBelow } = useResponsive();
  const isMobile = isBelow("md");

  // 按位置分组小部件
  const leftWidgets = widgets
    .filter((w) => w.position === "left")
    .sort((a, b) => a.priority - b.priority);

  const centerWidgets = widgets
    .filter((w) => w.position === "center")
    .sort((a, b) => a.priority - b.priority);

  const rightWidgets = widgets
    .filter((w) => w.position === "right")
    .sort((a, b) => a.priority - b.priority);

  // 在移动端，将所有小部件按优先级排序后显示
  if (isMobile) {
    // 合并所有小部件并按优先级排序
    const allWidgets = [...leftWidgets, ...centerWidgets, ...rightWidgets].sort(
      (a, b) => {
        // 首先按位置排序 (left > center > right)
        const positionOrder = { left: 0, center: 1, right: 2 };
        const positionDiff =
          positionOrder[a.position] - positionOrder[b.position];

        // 如果位置相同，则按优先级排序
        if (positionDiff === 0) {
          return a.priority - b.priority;
        }

        return positionDiff;
      }
    );

    return (
      <div className="space-y-8">
        {allWidgets.map((widget) => (
          <WidgetContainer key={widget.id} config={widget} />
        ))}
      </div>
    );
  }

  // 桌面布局 - 三栏
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3 space-y-8">
        {leftWidgets.map((widget) => (
          <WidgetContainer key={widget.id} config={widget} />
        ))}
      </div>

      <div className="col-span-6 space-y-8">
        {centerWidgets.map((widget) => (
          <WidgetContainer key={widget.id} config={widget} />
        ))}
      </div>

      <div className="col-span-3 space-y-8">
        {rightWidgets.map((widget) => (
          <WidgetContainer key={widget.id} config={widget} />
        ))}
      </div>
    </div>
  );
};

export default WidgetsLayout;
