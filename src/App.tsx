import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import ProfileCard from "@/components/profile/ProfileCard";
import GithubActivity from "@/components/github/GithubActivity";
import SkillsList from "@/components/skills/SkillsList";
import NavigationLinks from "@/components/navigation/NavigationLinks";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { useTheme } from "@/contexts/ThemeContext";

import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { memosData } from "@/data/memos";
import { skillsData } from "@/data/skills";
import { navigationLinks } from "@/data/navigation";

const App: React.FC = () => {
  const { theme } = useTheme();

  // 确保背景图片预先加载
  useEffect(() => {
    // 预加载背景图和第一个项目图片
    const preloadImages = [
      // "/background-light.webp",
      "/background-dark.webp",
      projectsData[0]?.imageUrl,
    ].filter(Boolean);

    preloadImages.forEach((url) => {
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
  }, []);

  // 添加调试函数，检查图片是否可访问
  useEffect(() => {
    const checkImageExists = (url: string) => {
      console.log(`Checking image: ${url}`);
      fetch(url)
        .then((response) => {
          if (response.ok) {
            console.log(`✅ Image exists: ${url}`);
          } else {
            console.error(`❌ Image not found: ${url} (${response.status})`);
          }
        })
        .catch((error) => {
          console.error(`❌ Error checking image: ${url}`, error);
        });
    };

    // 检查背景图片
    checkImageExists("/background-light.webp");
    checkImageExists("/background-dark.webp");
  }, []);

  // 左侧边栏内容
  const leftSidebar = (
    <div className="space-y-6">
      <ProfileCard
        name={profileData.name}
        title={profileData.title}
        bio={profileData.bio}
        avatar={profileData.avatar}
        social={profileData.social}
      />

      <GithubActivity
        username={
          profileData.social
            .find((s) => s.id === "github")
            ?.url.split("/")
            .pop() || "github"
        }
      />
    </div>
  );

  // 中间主要内容 - 使用新的项目区域组件
  const mainContent = (
    <ProjectsSection projects={projectsData} memos={memosData} />
  );

  // 右侧边栏内容 - 优化后的更紧凑布局
  const rightSidebar = (
    <div className="space-y-6">
      <SkillsList skills={skillsData} showTitle={true} />

      <NavigationLinks links={navigationLinks} showTitle={true} />
    </div>
  );

  // 确保图片路径正确，移除前导斜杠
  //   const lightBgPath = "background-light.webp";
  //   const darkBgPath = "background-dark.webp";

  // 确保App容器占满整个视口，但不再使用黑色背景
  return (
    <div
      className="min-h-screen w-full"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>{profileData.name} - 个人主页</title>
        <meta name="description" content={profileData.bio} />
        <meta name="keywords" content="Dogxi, 个人主页, 开发者, 作品集" />
        {/* 添加视口设置，优化移动体验 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* 设置主题色，与背景匹配 */}
        <meta
          name="theme-color"
          content={theme === "dark" ? "#010205" : "#d7e3f1"}
        />
      </Helmet>

      {/* 背景: 深色模式使用图片，浅色模式使用背景色 */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {theme === "dark" ? (
          <img
            src="background-dark.webp"
            alt=""
            className="absolute w-[120%] h-[120%] object-cover"
            style={{
              left: "-10%",
              top: "-10%",
              transform: "translateZ(0)",
              willChange: "transform",
              minWidth: "120vw",
              minHeight: "120vh",
            }}
          />
        ) : (
          <div
            className="absolute inset-0 bg-[#f0f4f8]"
            style={{
              minWidth: "100vw",
              minHeight: "100vh",
            }}
          />
        )}
      </div>

      <MainLayout
        leftSidebar={leftSidebar}
        mainContent={mainContent}
        rightSidebar={rightSidebar}
      />
    </div>
  );
};

export default App;
