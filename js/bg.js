// bj.js
// document.addEventListener("DOMContentLoaded", function() {
//     // 定义图片数组
//     const images = [
//         'images/background1.jpg',
//         'images/background2.jpg',
//     ];

//     // 随机选择一张图片
//     const randomImage = images[Math.floor(Math.random() * images.length)];

//     // 设置背景图
//     const bgElement = document.getElementById('bg');
//     bgElement.style.backgroundImage = `url(${randomImage})`;
// });
document.addEventListener("DOMContentLoaded", function() {
    // 定义手机和非手机的图片数组
    const mobileImages = [
        'images/mobile1.jpg',
    ];
    const desktopImages = [
        'images/desktop1.jpg',
        'images/desktop2.jpg',
        'images/desktop3.jpg',
    ];

    // 检测是否是手机访问
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // 根据设备类型选择相应的图片数组
    const images = isMobile() ? mobileImages : desktopImages;

    // 随机选择一张图片
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // 设置背景图
    const bgElement = document.getElementById('bg');
    bgElement.style.backgroundImage = `url(${randomImage})`;
});

