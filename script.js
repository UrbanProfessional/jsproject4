

document.addEventListener("DOMContentLoaded", function (event) {
    let bugs = document.getElementsByClassName('bugs');
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var bugSize = 100;
    var wrapperWidth = parseInt(getComputedStyle(wrapper).width.split('px')[0], 10);
    var wrapperHeight = parseInt(getComputedStyle(wrapper).height.split('px')[0], 10);
    var dx = 20;
    var dy = -20;
    var bugsList = [];

    var i = 0;
    for (let bug of bugs) {

        bug.addEventListener('click', function (event) {
            splat(this);

        });
       
        let bugObject = {
            x: wrapperWidth / 2,
            y: wrapperHeight - 200,
            index: i
        }
        if (i >= 1)
        {
            bugObject = {
                x: (wrapperWidth / 2) - (Math.floor(Math.random() * 700)),
                y: bugsList[i - 1].y - (Math.floor(Math.random() * 20 + 30)),
                index: i
            }
        }
        bugsList.push(bugObject);
        // console.log(bugsList[bugObject.index].x)
        moveBug(bug, bugObject.index);
        i++;
    }
   
    console.log(bugsList)

    function splat(ele) {
        console.log('splat')
        ele.style.display = "none";
    }
    function moveBug(ele, index) { 
    
        let timer = setInterval(() => {
          
            translate(ele, bugsList[index]);
           
        }, 100)
    }
    function translate(ele, bug) {
        if (bug.x + dx > wrapperWidth - bugSize || bug.x + dx < bugSize) {
           
            dx = -dx;
        }
        if (bug.y + dy > wrapperHeight - bugSize || bug.y + dy <= -50) {
            dy = -dy;
        }
        bug.x += dx;
        bug.y += dy;
        ele.style.left = bug.x + "px";
        ele.style.top = bug.y + "px";
        
    }
});


