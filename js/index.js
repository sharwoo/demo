$(function(){
    setTimeout(function(){
        // 前3秒慢速，3秒后加速
        $('.box2 img').removeClass('start').addClass('fast')
    },5000)
    setTimeout(function(){
        // 6秒后暂停旋转动画，弹出模态框
        //$('.box2 img').css('animation-duration',0+'s');
        //$('.modal').css('display','block')
        //$('.box2 img').css('animation','rota .5s linear infinite,rota 3s ease-out')
        //$('.box2 img').removeClass('fast').addClass('end');
        $('.box2 img').removeClass('fast').addClass('end')
    },10000)
    setTimeout(function(){
        // 6秒后暂停旋转动画，弹出模态框
        //$('.box2 img').css('animation-duration',0+'s');
        //$('.modal').css('display','block')
        //$('.box2 img').css('animation','rota 3s ease-out')
    },15000)
})