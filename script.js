

document.addEventListener("DOMContentLoaded", function (event) {
    let bugs = document.getElementsByClassName('bugs');
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var bugSize = 100;
    var wrapperWidth = parseInt(getComputedStyle(wrapper).width.split('px')[0], 10);
    var wrapperHeight = parseInt(getComputedStyle(wrapper).height.split('px')[0], 10);
    var dx = 20;
    var dy = -20;
    var bugsList = [];
    var intervals = [];
    var totalDeaths = 0;
    var i = 0;
    var defiant = ["YOU SUCK", "GET GUD", "HAHA", "EZ", "YOU CAN'T CATCH US", "CALL US THE FLASH", "YOUR SLOWER THAN A TURTLE", 
                   "ARE YOU EVEN A GAMER!", "WOW YOU ARE BAD", "ARE YOU A CHILD??", "YOU SHOULD CALL SOME BACKUP CAUSE YOU SUCK!"];
    var pleading = ["KING PLEASE!", "WE'LL GIVE YOU A THOUSAND DOLLARS", "IF YOU STOP, WE'LL BE YOUR BEST FRIENDS",
                    "WAIT A MINUTE PLEASE!!!", "WE DIDN'T MEAN WHAT WE SAID BEFORE", "PLEASE SPARE US", "KING I BEG YOU HIGHNESS",
                    "IF YOU STOP, WE'LL WORSHIP YOU!"]
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
                x: (wrapperWidth / 2) - (Math.floor(Math.random() * 600)),
                y: bugsList[i - 1].y - (Math.floor(Math.random() * 10 + 30)),
                index: i
            }
        }
        bugsList.push(bugObject);
       
        moveBug(bug, bugObject.index);
        i++;
    }
   

    function splat(ele) {
        if (!ele.src.includes("assets/bug-splatter.png"))
        {
            ele.src = "assets/bug-splatter.png";
            totalDeaths++;
            sayComment();
            document.getElementById('message-area').style.opacity = 1;
            setTimeout(function () {
                ele.style.display = "none";
            }, 3000)
        }
        
    }
    function moveBug(ele, index) { 
        
        var timer = setInterval(() => {
          
            translate(ele, bugsList[index]);
            if (totalDeaths == 15)
            {
               for (let interval of intervals)
               {
                 clearInterval(interval);
               }  
               for (let bug of bugs)
               {
                 bug.style.display = "none";
               }
                endScreen();

            }
        }, 100)
        intervals.push(timer);
    }
    function sayComment()
    {
        
        if (totalDeaths <= 8)
        {
            let rnd = Math.floor(Math.random() * defiant.length);
            
           
            document.getElementById('message-area').innerHTML = defiant[rnd];
            defiant.splice(rnd, 1);
        }
        else
        {
            let rnd = Math.floor(Math.random() * pleading.length);
            document.getElementById('message-area').innerHTML = pleading[rnd];
            pleading.splice(rnd, 1);
        }
        
    }
    function translate(ele, bug) {

        if (!ele.src.includes("assets/bug-splatter.png"))
        {
            if (bug.x + dx > wrapperWidth - bugSize || bug.x + dx < bugSize) {
            
                dx = -dx;
            }
            if (bug.y + dy > wrapperHeight - bugSize || bug.y + dy <= bugSize - 100) {
                dy = -dy;
            }
            bug.x += dx;
            bug.y += dy;
            ele.style.left = bug.x + "px";
            ele.style.top = bug.y + "px";
        }
       
    }
    function endScreen()
    {
        alert("You splattered us all")
    }
});


