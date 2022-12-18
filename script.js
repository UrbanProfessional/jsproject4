

document.addEventListener("DOMContentLoaded", function (event) {
    let bugs = document.getElementsByClassName('bugs');
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var bugSize = 200;
    var wrapperWidth = getComputedStyle(wrapper).width.split('px')[0];
    var wrapperHeight = getComputedStyle(wrapper).height.split('px')[0];
    var dx = 2;
    var dy = -2;
    var bugsList = [];
    var i = 0;
    for (let bug of bugs) {

        bug.addEventListener('click', function (event) {
            splat(this);

        });
        let bugObject = {
            x: (wrapperWidth / 2),
            y: wrapperHeight - 200,
            index: i
        }
        bugsList.push(bugObject);
        console.log(bugsList[bugObject.index].x)
        moveBug(bug, bugObject.index);
        i++;
    }

    function splat(ele) {
        console.log('splat')
        ele.style.display = "none";
    }
    function moveBug(ele, index) { 
    
        let timer = setInterval(() => {
           
            translate(ele, bugsList[index].x, bugsList[index].y);
            console.log(bugsList[index].x)
        }, 100)
    }
    function translate(ele, x, y) {
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


