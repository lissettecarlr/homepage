/**
 * 背景图片处理脚本
 * 根据设备类型加载不同的背景图片
 */
document.addEventListener("DOMContentLoaded", () => {
    // 背景图配置
    const BACKGROUNDS = {
        mobile: [
            'images/mobile1.jpg'
        ],
        desktop: [
            'images/desktop1.jpg',
            'images/desktop2.jpg',
            'images/desktop3.jpg',
            'images/desktop4.png',
            'images/desktop5.png'
        ]
    };

    // 检测设备类型
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
    
    // 选择合适的图片集
    const imageSet = isMobile() ? BACKGROUNDS.mobile : BACKGROUNDS.desktop;
    
    // 随机选择一张图片
    const randomImage = imageSet[Math.floor(Math.random() * imageSet.length)];
    
    // 设置背景图
    const bgElement = document.getElementById('bg');
    if (bgElement) {
        bgElement.style.backgroundImage = `url(${randomImage})`;
    }
});

