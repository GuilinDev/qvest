/**
 * Qvest Website JavaScript
 * Handles interactive elements and animations
 */

// Mobile Navigation Menu
function showMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.style.right = '0';
        
        // 显示关闭按钮
        const closeButton = navLinks.querySelector('.close-menu');
        if (closeButton) {
            closeButton.style.display = 'block';
        }
    }
}

function hideMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.style.right = '-250px';
        
        // 隐藏关闭按钮
        const closeButton = navLinks.querySelector('.close-menu');
        if (closeButton) {
            closeButton.style.display = 'none';
        }
    }
}

// 页面加载后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查URL中是否有锚点，如果有且是页面刚加载，则移除锚点并回到顶部
    if (window.location.hash) {
        // 移除URL中的锚点但不触发页面跳转
        history.replaceState('', document.title, window.location.pathname + window.location.search);
        // 确保页面滚动到顶部
        window.scrollTo(0, 0);
    }
    
    // 确保移动菜单正确初始化
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.style.right = '-250px';
        
        // 确保初始状态下关闭按钮是隐藏的
        const closeButton = navLinks.querySelector('.close-menu');
        if (closeButton) {
            closeButton.style.display = 'none';
        }
    }
    
    // 平滑滚动到锚点
    setupSmoothScrolling();
    
    // 初始化动画
    initAnimations();
    
    // 初始化轮播
    initTestimonialSlider();
    
    // 初始化表单处理
    setupForms();
});

// 设置平滑滚动
function setupSmoothScrolling() {
    // 选择所有带有锚点链接的元素，不仅仅是导航栏内的
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // 更新URL但不重新加载页面
                history.pushState(null, null, targetId);
            }
            
            // 在移动设备上点击链接后关闭菜单
            if (document.getElementById('navLinks') && 
                document.getElementById('navLinks').style.right === '0px') {
                hideMenu();
            }
        });
    });
}

// 轮播功能
let slideIndex = 1;

function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length === 0 || dots.length === 0) {
        return; // 如果没有找到元素，直接返回
    }
    
    showSlides(slideIndex);
    
    // 每5秒自动切换
    setInterval(() => {
        slideIndex++;
        if (slideIndex > testimonials.length) {
            slideIndex = 1;
        }
        showSlides(slideIndex);
    }, 5000);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length === 0 || dots.length === 0) {
        return; // 如果没有找到元素，直接返回
    }
    
    if (n > testimonials.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = testimonials.length;
    }
    
    // 隐藏所有轮播项
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    
    // 移除所有点的active类
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // 显示当前轮播项并激活对应的点
    testimonials[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// 滚动动画
function initAnimations() {
    const elements = document.querySelectorAll('.service-card, .project-card, .stat-box, .section-header, .about-text, .about-stats');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
        
        // 为Hero部分添加特定动画
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.classList.add('slide-in-left');
        }
        
        if (heroImage) {
            heroImage.classList.add('slide-in-right');
        }
    } else {
        // 回退方案：如果浏览器不支持IntersectionObserver
        elements.forEach(element => {
            element.classList.add('fade-in');
        });
    }
}

// 表单处理
function setupForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单验证和API调用
            // 现在只显示提交成功消息
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerText;
                
                submitBtn.innerText = 'Submitted!';
                submitBtn.disabled = true;
                
                // 3秒后重置表单和按钮
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    });
}

// Research Papers Modal Functions
function openPapersModal() {
    const modal = document.getElementById('papers-modal');
    if (modal) {
        document.body.style.overflow = 'hidden'; // 防止背景滚动
        modal.style.display = 'block';
        
        // 添加过渡动画效果
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // 添加ESC键关闭模态框
        document.addEventListener('keydown', handleEscKeyPress);
        
        // 添加点击模态框外部关闭
        modal.addEventListener('click', handleOutsideClick);
    }
}

function closePapersModal() {
    const modal = document.getElementById('papers-modal');
    if (modal) {
        modal.classList.remove('show');
        
        // 等待过渡完成后隐藏模态框
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // 恢复背景滚动
        }, 300);
        
        // 移除事件监听器
        document.removeEventListener('keydown', handleEscKeyPress);
        modal.removeEventListener('click', handleOutsideClick);
    }
}

function handleEscKeyPress(e) {
    if (e.key === 'Escape') {
        closePapersModal();
    }
}

function handleOutsideClick(e) {
    // 仅当点击模态框背景而非内容区域时关闭
    if (e.target === document.getElementById('papers-modal')) {
        closePapersModal();
    }
} 