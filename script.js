const deg = 6,
hours = document.querySelector('.hours'),
minuts = document.querySelector('.minuts'),
seconds = document.querySelector('.seconds');


setInterval(() => {

    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    hours.style.transform = `rotate(${(hh)+(mm/12)}deg)`;
    minuts.style.transform = `rotate(${(mm)}deg)`;
    seconds.style.transform = `rotate(${(ss)}deg)`;
    
});
