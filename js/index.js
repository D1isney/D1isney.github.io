

const nav = document.querySelector('.nav');
const body = document.getElementsByTagName('body')[0];

const shop = document.getElementById('shop');
const shopContent = document.querySelector('.shop-content');
shop.addEventListener('mouseenter', function() {
    if (!shopContent.classList.contains('active')) {
        shopContent.classList.add('active'); // 添加 active 类来展开下拉菜单
        // body.classList.add('blur');
        shop.classList.remove('blur');
        // 关闭lPadContent
        lPadContent.classList.remove('active');
        lPad.classList.remove('blur');
        PacContent.classList.remove('active');
        Pac.classList.remove('blur');
        lPhoneContent.classList.remove('active');
        lPhone.classList.remove('blur');
    }
});
shopContent.addEventListener('mouseleave', function() {
    shopContent.classList.remove('active');
    // body.classList.remove('blur');
});

const lPad = document.getElementById('lPad');
const lPadContent = document.querySelector('.lPad-content');
lPad.addEventListener('mouseenter', function() {
    if (!lPadContent.classList.contains('active')) {
        lPadContent.classList.add('active'); // 添加 active 类来展开下拉菜单
        this.classList.add('blur');
        lPad.classList.remove('blur');

        // 关闭shopContent
        shopContent.classList.remove('active');
        shop.classList.remove('blur');
        PacContent.classList.remove('active');
        Pac.classList.remove('blur');
        lPhoneContent.classList.remove('active');
        lPhone.classList.remove('blur');
    }
});
lPadContent.addEventListener('mouseleave', function() {
    lPadContent.classList.remove('active');
    this.classList.remove('blur');
});


const Pac = document.getElementById('Pac');
const PacContent = document.querySelector('.Pac-content');
Pac.addEventListener('mouseenter', function() {
    if (!PacContent.classList.contains('active')) {
        this.classList.add('blur');
        PacContent.classList.add('active'); // 添加 active 类来展开下拉菜单
        Pac.classList.remove('blur');

        // 关闭shopContent
        shopContent.classList.remove('active');
        shop.classList.remove('blur');
        lPadContent.classList.remove('active');
        lPad.classList.remove('blur');
        lPhoneContent.classList.remove('active');
        lPhone.classList.remove('blur');
    }
});

PacContent.addEventListener('mouseleave', function() {
    PacContent.classList.remove('active');
    this.classList.remove('blur');
});


const lPhone = document.getElementById('lPhone');
const lPhoneContent = document.querySelector('.lPhone-content');
lPhone.addEventListener('mouseenter', function() {
    if (!lPhoneContent.classList.contains('active')) {
        this.classList.add('blur');
        lPhoneContent.classList.add('active'); // 添加 active 类来展开下拉菜单
        lPhone.classList.remove('blur');

        // 关闭shopContent
        shopContent.classList.remove('active');
        shop.classList.remove('blur');
        lPadContent.classList.remove('active');
        lPad.classList.remove('blur');
        PacContent.classList.remove('active');
        Pac.classList.remove('blur');
    }
});

lPhoneContent.addEventListener('mouseleave', function() {
    lPhoneContent.classList.remove('active');
    this.classList.remove('blur');
});