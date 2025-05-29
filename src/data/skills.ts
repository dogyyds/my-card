import { Skill } from '@/types';

export const skillsData: Skill[] = [
    // 前端技能
    {
        id: 'react',
        name: 'React',
        category: 'frontend',
        level: 4,
        icon: 'FaReact',
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'frontend',
        level: 4,
        icon: 'SiTypescript',
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        category: 'frontend',
        level: 4,
        icon: 'SiJavascript',
    },
    {
        id: 'css',
        name: 'CSS/Sass',
        category: 'frontend',
        level: 4,
        icon: 'FaCss3Alt',
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'frontend',
        level: 4,
        icon: 'SiTailwindcss',
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        category: 'frontend',
        level: 4,
        icon: 'SiNextdotjs',
    },

    // 后端技能
    {
        id: 'nodejs',
        name: 'Node.js',
        category: 'backend',
        level: 3,
        icon: 'FaNodeJs',
    },
    {
        id: 'express',
        name: 'Express',
        category: 'backend',
        level: 3,
        icon: 'SiExpress',
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'backend',
        level: 3,
        icon: 'SiMongodb',
    },

    // 设计技能
    {
        id: 'figma',
        name: 'Figma',
        category: 'design',
        level: 4,
        icon: 'FaFigma',
    },
    {
        id: 'photoshop',
        name: 'Photoshop',
        category: 'design',
        level: 3,
        icon: 'SiAdobephotoshop',
    },
    {
        id: 'ui-design',
        name: 'UI 设计',
        category: 'design',
        level: 4,
        icon: 'MdDesignServices',
    },

    // 其他技能
    {
        id: 'git',
        name: 'Git',
        category: 'other',
        level: 4,
        icon: 'FaGitAlt',
    },
    {
        id: 'docker',
        name: 'Docker',
        category: 'other',
        level: 3,
        icon: 'FaDocker',
    },
];
