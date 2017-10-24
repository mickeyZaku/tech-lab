let canvas = document.getElementById('canvas');

canvas.width = Math.min(800,$(window).width()-20);
canvas.height = canvas.width;

let context = canvas.getContext('2d');
let isMouseDown = false;
let lastLocation = {x:0,y:0};
let lastTime = 0;
let lastLineW = -1;
let strokeColor = '#000';
$('.controller').css('width',canvas.width);
drawGrid();

$('#clear_btn').click(function (e) {
    context.clearRect(0,0,canvas.width,canvas.height);
    drawGrid();
})
$('.color_btn').click(function (e) {
    $('.color_btn').removeClass('color_btn_selected');
    $(this).addClass('color_btn_selected');
    strokeColor = $(this).css('background-color');
})
canvas.onmousedown = function (e) {
    e.preventDefault();
    beginStroke({x:e.clientX,y:e.clientY});
};
canvas.onmouseup = function (e) {
    e.preventDefault();
    endStroke();
};
canvas.onmousemove = function (e) {
  e.preventDefault();
    if (isMouseDown) {
       moveStroke({x:e.clientX,y:e.clientY});
    }
};
canvas.onmouseout = function (e) {
  e.preventDefault();
  endStroke();
};
canvas.addEventListener('touchstart',function (e) {
    e.preventDefault();
    touch = e.touches[0];
    beginStroke({x:touch.pageX,y:touch.pageY});
});
canvas.addEventListener('touchmove',function (e) {
    e.preventDefault();
    touch = e.touches[0];
    moveStroke({x:touch.pageX,y:touch.pageY});
});
canvas.addEventListener('touchend',function (e) {
   e.preventDefault();
   endStroke();
});
function drawGrid() {
    context.save();
    context.strokeStyle = 'rgb(230,11,9)';

    context.beginPath();
    context.moveTo(3,3);
    context.lineTo(canvas.width-3,3);
    context.lineTo(canvas.width-3,canvas.height-3);
    context.lineTo(3,canvas.height-3);
    context.closePath();


    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(canvas.width,canvas.height);
    context.moveTo(canvas.width,0);
    context.lineTo(0,canvas.height);
    context.moveTo(0,canvas.height/2);
    context.lineTo(canvas.width,canvas.height/2);
    context.moveTo(canvas.width/2,0);
    context.lineTo(canvas.width/2,canvas.height);
    context.closePath();

    context.lineWidth = 1;
    context.stroke();
    context.restore();
}

function windwoToCanvas(x,y) {
    let box = canvas.getBoundingClientRect();
    x = x - box.left;
    y = y - box.top;
    return {x:Math.round(x),y:Math.round(y)}
}
function distance(loc,locNew) {
    return Math.sqrt((loc.x-locNew.x)*(loc.x-locNew.x)+(loc.y-locNew.y)*(loc.y-locNew.y));
}
function calLineWidth(s,t) {
    var v = s/t;
    var res;
    let minV = 0.1;
    let maxV = 10;
    let maxW = 25;
    let minW = 1;
    if (v <= minV) {
        res = maxW;
    } else if(v >= maxV) {
        res = minW;
    } else {
        res = maxW - (v-minV)/(maxV-minV)*(maxW-minW)
    }
    if (lastLineW === -minW) {
        return res;
    }
    return lastLineW*2/3+res/3;
}
function beginStroke(point) {
    isMouseDown = true;
    lastLocation = windwoToCanvas(point.x,point.y);
    lastTime = new Date().getTime();
}
function endStroke() {
    isMouseDown = false;
}
function moveStroke(point) {
    let curLocation = windwoToCanvas(point.x,point.y);
    let curTime = new Date().getTime();
    let s = distance(curLocation,lastLocation);
    let t = curTime - lastTime;
    let lineW = calLineWidth(s,t);
    context.beginPath();
    context.moveTo(lastLocation.x,lastLocation.y);
    context.lineTo(curLocation.x,curLocation.y);
    context.closePath();
    context.strokeStyle = strokeColor;
    context.lineWidth = lineW;
    context.lineJoin = 'round';
    context.stroke();

    lastLocation = curLocation;
    lastTime = curTime;
    lastLineW = lineW;
}