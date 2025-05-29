// 社交媒体链接类型
export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string; // 图标组件名称
}

// 项目类型
export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    tags: string[];
    links: {
        demo?: string;
        source?: string;
        article?: string;
    };
    featured: boolean;
    date: string;
}

// 技能类型
export interface Skill {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'design' | 'other';
    level: number; // 1-5
    icon?: string;
}

// 导航链接类型
export interface NavLink {
    id: string;
    name: string;
    url: string;
    icon: string;
    isExternal: boolean;
}

// 备忘录类型
export interface Memo {
    id: string;
    content: string;
    date: string;
    tags: string[];
}

// 小部件类型
export enum WidgetType {
    Projects = 'projects',
    Memos = 'memos',
    Skills = 'skills',
    Navigation = 'navigation',
    Github = 'github',
}

// 小部件配置
export interface WidgetConfig {
    id: string;
    type: WidgetType;
    title: string;
    position: 'left' | 'center' | 'right';
    priority: number; // 用于排序，数字越小优先级越高
}

// 个人信息类型
export interface Profile {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    social: SocialLink[];
    email?: string;
    location?: string;
}

// 主题类型
export type Theme = 'dark' | 'light';
