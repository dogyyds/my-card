import React from "react";
import { useResponsive } from "@/hooks/useResponsive";
import ThemeToggle from "@/components/common/ThemeToggle";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

interface MainLayoutProps {
  leftSidebar: React.ReactNode;
  mainContent: React.ReactNode;
  rightSidebar: React.ReactNode;
}

// 简化动画配置，减少滚动时的开销
const simpleAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};

const MainLayout: React.FC<MainLayoutProps> = ({
  leftSidebar,
  mainContent,
  rightSidebar,
}) => {
  const { deviceType } = useResponsive();
  const isMobile = deviceType === "mobile";
  const isTablet = deviceType === "tablet";

  // 移动端布局
  if (isMobile) {
    return (
      <div className="min-h-screen px-4 py-6 flex flex-col">
        <header className="flex justify-between items-center sticky top-0 z-10 py-2 px-4 bg-white/10 dark:bg-black/15 backdrop-blur-md rounded-full">
          <ThemeToggle />
        </header>

        <div className="space-y-6 flex-grow">
          {leftSidebar}
          {mainContent}
          {rightSidebar}
        </div>

        <Footer />
      </div>
    );
  }

  // 平板布局
  if (isTablet) {
    return (
      <div className="min-h-screen px-6 py-8 flex flex-col">
        <header className="flex justify-end mb-6 sticky top-0 z-10 py-2 px-4 bg-white/10 dark:bg-black/15 backdrop-blur-md rounded-full">
          <ThemeToggle />
        </header>

        <div className="grid grid-cols-2 gap-6 flex-grow">
          <motion.section className="space-y-6" {...simpleAnimation}>
            {leftSidebar}
          </motion.section>

          <motion.section className="space-y-6" {...simpleAnimation}>
            {mainContent}
            {rightSidebar}
          </motion.section>
        </div>

        <Footer />
      </div>
    );
  }

  // 桌面布局 - 极简 风格的三栏
  return (
    <div className="min-h-screen p-10 overflow-x-hidden flex flex-col">
      <header className="flex justify-end mb-8 sticky top-4 z-10 py-2 px-4 bg-white/10 dark:bg-black/15 backdrop-blur-md rounded-full max-w-fit ml-auto">
        <ThemeToggle />
      </header>

      <div className="grid grid-cols-12 gap-8 flex-grow">
        <section className="col-span-3 space-y-8">{leftSidebar}</section>

        <section className="col-span-6 space-y-8">{mainContent}</section>

        <section className="col-span-3 space-y-8">{rightSidebar}</section>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
