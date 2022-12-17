

function splat(ele)
{
    console.log('splat')
    ele.style.display = "none";
}
function setBugPosition(ele)
{

}

function moveBug(ele)
{
    let i = 0;
    let direction = false;
    let timer = setInterval(() =>{
        
        
        translate(ele, moveDirection(), moveDirection())
   
        
        // limit to 70% of the page
        // if (i < 70 && !direction)
        // {
        //     i+=1;
        // }
        // else
        // {
        //     direction = true;
        //     i += -1;
        //     if (i <= 0)
        //     {
        //         direction = false;
        //     }
        // }
       
        
    }, 50)
}
function translate( ele, x, y )
 {
    var left = ele.style.left,
        top = ele.style.top,
        dx = left - x,
        dy = top - y,
        i = 1,
        count = 50,
        delay = 20;
    
    function loop() 
    {
        if ( i >= count ) { return; }
        i += 1;
        ele.style.left = ( left - ( dx * i / count ) ).toFixed(0) + '%';
        ele.style.top = ( top - ( dy * i / count ) ).toFixed(0) + '%';
        setTimeout( loop, delay );
    }
    
    loop();
}
function moveDirection()
{

    return Math.floor(Math.random() * 70);
}

document.addEventListener("DOMContentLoaded", function(event)
{
    let bugs = document.getElementsByClassName('bugs');
    console.log(bugs)
    for (let bug of bugs)
    {
        bug.addEventListener('click', function (event)
        {
            splat(this);
            
        });

        moveBug(bug);
    }
});


