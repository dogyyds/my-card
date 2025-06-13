# MyCard - 极简 风格个人主页

一个采用 极简 设计风格的现代化个人主页网站，使用 React、TypeScript 和 Tailwind CSS 构建。

## 特性

- 🎨 极简 风格的 UI 设计 - 磨砂玻璃效果、圆形按钮组
- 🌓 深色/浅色主题支持 - 自动适应系统主题
- 📱 完全响应式设计 - 在任何设备上都能完美展示
- ✨ 流畅动画效果 - 使用 Framer Motion 实现
- 🔧 高度可定制 - 易于配置个人信息和项目
- 🚀 性能优化 - 快速加载和交互响应

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **类型检查**: TypeScript
- **样式方案**: Tailwind CSS
- **动画库**: Framer Motion
- **图标库**: React Icons

## 快速开始

### 安装依赖

```bash
npm install
# 或使用 yarn
yarn
# 或使用 pnpm
pnpm install
```

### 开发模式

```bash
npm run dev
# 或使用 yarn
yarn dev
# 或使用 pnpm
pnpm dev
```

### 构建生产版本

```bash
npm run build
# 或使用 yarn
yarn build
# 或使用 pnpm
pnpm build
```

## 自定义内容

所有内容配置都在 `src/data` 目录下：

- `profile.ts` - 个人信息和社交媒体链接
- `projects.ts` - 项目展示数据
- `skills.ts` - 技能列表
- `memos.ts` - 备忘录内容
- `navigation.ts` - 导航链接

## 目录结构

```
/src
|-- /components       # UI 组件
|   |-- /common       # 通用组件 (Button, Card 等)
|   |-- /layout       # 布局组件
|   |-- /profile      # 个人资料相关组件
|   |-- /projects     # 项目展示相关组件
|   |-- /skills       # 技能展示相关组件
|   |-- /memos        # 备忘录相关组件
|   |-- /navigation   # 导航相关组件
|   |-- /github       # GitHub 相关组件
|-- /contexts         # React 上下文
|-- /data             # 数据文件
|-- /hooks            # 自定义 Hooks
|-- /types            # TypeScript 类型定义
|-- /utils            # 工具函数
|-- /styles           # 全局样式
|-- App.tsx           # 主应用组件
|-- main.tsx          # 应用入口
```

## 部署

项目构建后可以部署到任何静态网站托管服务，如 Vercel、Netlify、GitHub Pages 等。

## 许可证

MIT

---

Inspired by Apple 极简 UI design.
