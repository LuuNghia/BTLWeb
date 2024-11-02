function changeIcon(icon) {
    // Chuyển đổi giữa '•••' và '✕'
    icon.textContent = icon.textContent === '•••' ? '✕' : '•••';
    
    // Chuyển đổi lớp 'active' trên phần tử subs-menu
    const subsMenu = document.querySelector('.subs-menu');
    subsMenu.classList.toggle('active');


}
