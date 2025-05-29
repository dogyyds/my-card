import { WidgetConfig, WidgetType } from '@/types';

export const widgetsConfig: WidgetConfig[] = [
    // 左侧小部件
    {
        id: 'profile',
        type: WidgetType.Projects, // 特殊类型，实际是个人资料
        title: '个人资料',
        position: 'left',
        priority: 0,
    },
    {
        id: 'github-activity',
        type: WidgetType.Github,
        title: 'GitHub 活动',
        position: 'left',
        priority: 1,
    },

    // 中间小部件
    {
        id: 'featured-projects',
        type: WidgetType.Projects,
        title: '精选项目',
        position: 'center',
        priority: 0,
    },
    {
        id: 'recent-memos',
        type: WidgetType.Memos,
        title: '最近备忘录',
        position: 'center',
        priority: 1,
    },

    // 右侧小部件
    {
        id: 'skills',
        type: WidgetType.Skills,
        title: '技能',
        position: 'right',
        priority: 0,
    },
    {
        id: 'navigation',
        type: WidgetType.Navigation,
        title: '导航',
        position: 'right',
        priority: 1,
    },
];
