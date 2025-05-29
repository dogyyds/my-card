import { Project } from '@/types';

export const projectsData: Project[] = [
    {
        id: 'mycard',
        title: 'MyCard',
        description: 'Vision Pro 风格的个人主页，采用现代化前端技术栈构建，具有磨砂玻璃UI和流畅动效。',
        // imageUrl: '/projects/mycard.jpg',
        tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        links: {
            demo: '/',
            source: 'https://github.com/dogyyds/my-card',
        },
        featured: true,
        date: '2025-05-30',
    },
    {
        id: 'more',
        title: '待更新',
        description: '没有在摸鱼了～ 学习新东西ing',
        // imageUrl: '/projects/mycard.jpg',
        tags: ['Swift', 'Godot', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        links: {
            demo: '/',
            // source: 'https://github.com/dogyyds/my-card',
        },
        featured: false,
        date: '2025-05-30',
    },
];
