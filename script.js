

function splat(ele)
{
    console.log('splat')
    ele.src = "";
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
    }
});


