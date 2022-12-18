

document.addEventListener("DOMContentLoaded", function (event) {
    let bugs = document.getElementsByClassName('bugs');
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var bugSize = 200;
    var wrapperWidth = getComputedStyle(wrapper).width.split('px')[0];
    var wrapperHeight = getComputedStyle(wrapper).height.split('px')[0];
    var x = wrapperWidth / 2;
    var y = wrapperHeight - 200;
    var dx = 30;
    var dy = -10;
    console.log(wrapperHeight)
    console.log(x)


    for (let bug of bugs) {
        bug.addEventListener('click', function (event) {
            splat(this);

        });

        moveBug(bug);
    }

    function splat(ele) {
        console.log('splat')
        ele.style.display = "none";
    }
    function moveBug(ele) {
        let timer = setInterval(() => {
            translate(ele)

        }, 100)
    }
    function translate(ele) {


        if (x + dx > wrapperWidth - bugSize || x + dx < bugSize) {
            dx = -dx;
        }
        if (y + dy > wrapperHeight - bugSize || y + dy <= -50) {
            dy = -dy;
        }
        x += dx;
        y += dy;
        ele.style.left = x + "px";
        ele.style.top = y + "px";
    }
});


