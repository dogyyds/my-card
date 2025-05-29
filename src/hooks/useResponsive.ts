import { useState, useEffect } from 'react';

// 响应式断点
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};

type Breakpoint = keyof typeof breakpoints;

export function useResponsive() {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
    });

    // 检查是否在特定断点以上
    const isAbove = (breakpoint: Breakpoint): boolean => {
        return screenSize.width >= breakpoints[breakpoint];
    };

    // 检查是否在特定断点以下
    const isBelow = (breakpoint: Breakpoint): boolean => {
        return screenSize.width < breakpoints[breakpoint];
    };

    // 当前设备类型
    const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
        if (screenSize.width < breakpoints.md) return 'mobile';
        if (screenSize.width < breakpoints.lg) return 'tablet';
        return 'desktop';
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // 设置初始尺寸
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width: screenSize.width,
        height: screenSize.height,
        isAbove,
        isBelow,
        deviceType: getDeviceType(),
    };
}
