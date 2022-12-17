

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
        
        switch (moveDirection())
        {
             case 0:  
                ele.style.left = i + "%"; 
                break;
             case 1:  
                ele.style.right = i + "%"; 
                break;
             case 2:  
                ele.style.top = i + "%";
                break;
             case 3:  
                ele.style.bottom = i + "%"; 
                break;
        }

        
        // limit to 85% of the page

        if (i < 60 && !direction)
        {
            i+=1;
        }
        else
        {
            direction = true;
             i += -1;
             if (i <= 0)
             {
                direction = false;
                console.log(i)
             }
        }
       
        
    }, 30)
}

function moveDirection()
{

    return Math.floor(Math.random() * 4);
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


