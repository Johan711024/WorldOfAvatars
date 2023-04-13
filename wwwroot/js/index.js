//AvatarComponent

window.getWindowDimensions = function () {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}; 


//SVGComponent

window.InsertSVG = (tag,names,values, containerId) => {
    
    //alert('ïm here: ' + containerId);
    console.log('tag: ' + tag + ' names: ' + names[0] + ' values: ' + values[0] + ' containerId: ' + containerId);
    var element = document.createElementNS('http://www.w3.org/2000/svg', tag);

    console.log('NAMES: ' + JSON.stringify(names));
            console.log('VALUES: ' + JSON.stringify(values));

    var i = 0;
    names.forEach(at => {
        console.log('Value: ' + values[i]);
        element.setAttributeNS(null, at, values[i].replaceAll('%20', ' '));
        i++;
    });    
    
    var container = document.getElementById(containerId);
    container.prepend(element);
}


//Initierar game-loop och sätter game objekt med instans ifrån Blazor

function gameLoop(timeStamp) {
    
    console.log("gameloop js: ");

    window.requestAnimationFrame(gameLoop);


    // Obs! STÄNGT AV gameloop anrop till blazor
    //game.instance.invokeMethodAsync('GameLoop', timeStamp);



    //game.instance.invokeMethodAsync('GameLoop', 1);
}

function onResize() {
    //if (!window.game.canvas)
    //    return;

    //game.canvas.width = window.innerWidth;
    //game.canvas.height = window.innerHeight;

    //game.instance.invokeMethodAsync('OnResize', game.canvas.width, game.canvas.height);
}

window.gameWindowResize = (instance) => {
    onResize();
};


window.initGame = (instance) => {
    //var canvasContainer = document.getElementById('canvasContainer'),
      //  canvases = canvasContainer.getElementsByTagName('canvas') || [];
    
    //Här sätts objektet "game" som får "instance" ifrån Blazor
    window.game = {
        instance: instance,
        //canvas: canvases.length ? canvases[0] : null
    };

    window.addEventListener("resize", onResize);

    // Obs! Avstängd gameloop för javascript
    //window.requestAnimationFrame(gameLoop);
};

window.onmousemove = (e) => {
    console.log(e.clientX + ' ' + e.clientY);
    game.instance.invokeMethodAsync('AvatarPosition', e.clientX, e.clientY, scrollZ);
};

let scrollZ=0;
window.onwheel = (e) => {
    if (e.deltaY>0)
    {
        scrollZ++;
    }
    else{
        scrollZ--;
    }

    console.log(e.clientX + ' ' + e.clientY);
    game.instance.invokeMethodAsync('AvatarPosition', e.clientX, e.clientY, scrollZ);
};