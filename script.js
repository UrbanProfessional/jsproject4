function initial() {
    document.getElementById('start').style.display = "none";
    scouts = document.getElementsByClassName('scouts');
    stage = document.getElementById('cont');
    intervals = [];
    totalDeaths = 0;
    i = 0;
    rude = ["BONK!", "BOINK!", "NEED A DISPENSER HERE!", "GG NO RE!", "IM RUNNING CIRCLES AROUND YAH!", 
                   "Knucklehead!"];
    scared = ["HELP!", "DOC COME ON MAN!", "MEDIC!",
                    "AAAH!", "NEED SOME HELP OVER HERE!", "AGHH!"]
    for (let scout of scouts) {
        scout.style.left = Math.random() * 90 + "%";
        scout.style.top = Math.random() * 55 + "%";
        scout.addEventListener('click', function (event) {
            kill(this);
        });
    }

    function kill(obj) {
        obj.src = "img/blood.png";
        totalDeaths++;
        say();
        document.getElementById('text').style.display = "block";
        obj.style.pointerEvents = "none";
        scoutEv();
    }
    
    function scoutEv() { 
        if (totalDeaths > 14) {
            document.getElementById("text").innerHTML = "You fragged all the scouts!";
            setTimeout(finished, 2000);
        }
    }
   
    function say()
    {
        
        if (totalDeaths <= 8)
        {
            let rnd = Math.floor(Math.random() * rude.length);
            document.getElementById('text').innerHTML = rude[rnd];;
        }
        else
        {
            let rnd = Math.floor(Math.random() * scared.length);
            document.getElementById('text').innerHTML = scared[rnd];
        }
        
    }

    function finished() {
        document.getElementById('drip').style.display = "block";
    }
}


