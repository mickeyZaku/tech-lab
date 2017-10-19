var WIDTH = 1024;
var HEIGHT = 768;
var RADIUS = 8; //半径
var MARGINT = 60;//上边距
var MARGINL = 30;//左边距
var endTime = new Date();
endTime.setTime(endTime.getTime()+3600*1000)
var curShowTimeSeconds = 0;
var balls = [];//小球存储数组
const colors = ["#33B5E5", "#0099CC", "#AA66CC", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"];
window.onload = function () {
    HEIGHT = document.body.clientHeight;
    WIDTH = document.body.clientWidth;
    MARGINL = Math.round(WIDTH/10);
    RADIUS = Math.round(WIDTH*4/5/108)-1;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    curShowTimeSeconds = getCurShowTimeSeconds();
    setInterval(function () {
        render(context);
        update();
    }, 50)
};

function getCurShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime()
    ret = Math.round(ret / 1000);
    return ret >= 0 ? ret : 0;
}

function render(ctx) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);//刷新，防重叠
    var hour = parseInt(curShowTimeSeconds / 3600);
    var minute = parseInt((curShowTimeSeconds - hour * 3600) / 60);
    var second = curShowTimeSeconds % 60;

    renderDigit(MARGINL, MARGINT, parseInt(hour / 10), ctx);
    renderDigit(MARGINL + 15 * (RADIUS + 1), MARGINT, parseInt(hour % 10), ctx);
    renderDigit(MARGINL + 30 * (RADIUS + 1), MARGINT, 10, ctx);
    renderDigit(MARGINL + 39 * (RADIUS + 1), MARGINT, parseInt(minute / 10), ctx);
    renderDigit(MARGINL + 54 * (RADIUS + 1), MARGINT, parseInt(minute % 10), ctx);
    renderDigit(MARGINL + 69 * (RADIUS + 1), MARGINT, 10, ctx);
    renderDigit(MARGINL + 78 * (RADIUS + 1), MARGINT, parseInt(second / 10), ctx);
    renderDigit(MARGINL + 93 * (RADIUS + 1), MARGINT, parseInt(second % 10), ctx);
    for (var i = 0; i < balls.length; i++) {
        ctx.fillStyle = balls[i].color;
        ctx.beginPath();
        ctx.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}

function renderDigit(x, y, num, ctx) {
    ctx.fillStyle = '#5589cc';
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[i].length; j++) {
            if (digit[num][i][j] === 1) {
                ctx.beginPath();
                ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI, false);
                ctx.closePath();
                ctx.fill();
            }

        }

    }
}

function update() {
    var nextShowTimeSeconds = getCurShowTimeSeconds();
    var nextHour = parseInt(nextShowTimeSeconds / 3600);
    var nextMinute = parseInt((nextShowTimeSeconds - nextHour * 3600) / 60);
    var nextSecond = nextShowTimeSeconds % 60;
    var hour = parseInt(curShowTimeSeconds / 3600);
    var minute = parseInt((curShowTimeSeconds - hour * 3600) / 60);
    var second = curShowTimeSeconds % 60;
    if (second !== nextSecond) {
        if (parseInt(hour / 10) !== parseInt(nextHour / 10)) {
            addBalls(MARGINL, MARGINT, parseInt(hour / 10));
        }
        if (parseInt(hour % 10) !== parseInt(nextHour % 10)) {

            addBalls(MARGINL + 15 * (RADIUS + 1), MARGINT, parseInt(hour % 10));

        }

        if (parseInt(minute / 10) !== parseInt(nextMinute / 10)) {

            addBalls(MARGINL + 39 * (RADIUS + 1), MARGINT, parseInt(minute / 10));

        }

        if (parseInt(minute % 10) !== parseInt(nextMinute % 10)) {

            addBalls(MARGINL + 54 * (RADIUS + 1), MARGINT, parseInt(minute % 10));

        }

        if (parseInt(second / 10) !== parseInt(nextSecond / 10)) {

            addBalls(MARGINL + 78 * (RADIUS + 1), MARGINT, parseInt(second / 10));

        }

        if (parseInt(second % 10) !==parseInt(nextSecond % 10)) {

            addBalls(MARGINL + 93 * (RADIUS + 1), MARGINT, parseInt(second % 10));

        }
        curShowTimeSeconds = nextShowTimeSeconds;

    }
    updateBalls()
}

function addBalls(x,y,num) {
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[i].length; j++) {
            if (digit[num][i][j] === 1) {
                var aBall = {
                    x:x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y:y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                    g:1.5+Math.random(),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,//+-4
                    vy:-5,
                    color:colors[Math.floor(Math.random()*colors.length)]
                }
                balls.push(aBall)
            }

        }

    }
}
function updateBalls() {
    for (var i = 0; i < balls.length; i++) {
        var ball = balls[i];
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vy += ball.g;
        if(balls[i].y+RADIUS >= HEIGHT){

            ball.y=HEIGHT-RADIUS;

            ball.vy=-ball.vy*0.6;

        }

    }
    var count = 0;
    for (var i = 0; i < balls.length; i++) {
        if (balls[i].x + RADIUS > 0 && balls[i].x-RADIUS < WIDTH) {
            balls[count++] = balls[i]
        }
        
    }
    while (balls.length > count){
        balls.pop();
    }
}