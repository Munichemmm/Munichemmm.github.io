let navclick = document.querySelector('#navicon');
let navicon = document.querySelector('#navshow');
let navbox = document.querySelector('.navbox');
const LBoxA = document.querySelector('.lboxa')
const LBoxB = document.querySelector('.lboxb')
const RBoxA = document.querySelector('.rboxa')
const RBoxB = document.querySelector('.rboxb')
const RBoxC = document.querySelector('.rboxc')
const RBoxD = document.querySelector('.rboxd')
const hrhight = document.querySelector('.hrhight')

navclick.onclick = function () {
    if (navicon.classList == ('fas fa-2x fa-bars')) {
        navicon.classList.remove('fa-bars');
        navicon.classList.add('fa-times');

        LBoxA.classList.add('L-boxA');
        LBoxB.classList.add('L-boxB');

        navbox.setAttribute('style', 'transform: translateX(0%);opacity: 1;')

        RBoxA.classList.add('R-boxA');
        RBoxB.classList.add('R-boxB');
        RBoxC.classList.add('R-boxC');
        RBoxD.classList.add('R-boxD');

        hrhight.classList.add('navhight');
    } else {
        navicon.classList.remove('fa-times');
        navicon.classList.add('fa-bars');
        LBoxA.classList.remove('L-boxA');
        LBoxB.classList.remove('L-boxB');

        navbox.setAttribute('style', 'transform: translateX(100%);opacity: 0;')

        RBoxA.classList.remove('R-boxA');
        RBoxB.classList.remove('R-boxB');
        RBoxC.classList.remove('R-boxC');
        RBoxD.classList.remove('R-boxD');

        hrhight.classList.remove('navhight');
    }
}