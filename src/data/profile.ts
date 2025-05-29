import { Profile } from '@/types';

export const profileData: Profile = {
    name: 'Dogxi',
    title: '👋 Hey there',
    bio: "I'm a university student interested in Web Dev, Game Dev, and more.",
    avatar: 'https://avatar.dogxi.me', // 添加头像文件到 public 目录
    social: [
        {
            id: 'github',
            name: 'GitHub',
            url: 'https://github.com/dogyyds',
            icon: 'FiGithub',
        },
        {
            id: 'bilibili',
            name: 'Bilibili',
            url: 'https://space.bilibili.com/524190453',
            icon: 'FiVideo',
        },
        {
            id: 'email',
            name: 'Email',
            url: 'mailto:hi@dogxi.me',
            icon: 'FiMail',
        },
    ],
    location: '中国',
    email: 'hi@dogxi.me',
};
