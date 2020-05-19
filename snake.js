var canvas;
var ctx;
var score = 0;
var vitesse = 200;
var niveau = 1;
var couleurSnake = "green";
var couleurTete = "yellow";
var couleurPomme = "red";
var couleurMur = "black";
var width = 40;
var height = 40;
var direction = "right";
var grandis = false;
var game;
var changementDirection = false;

let plateau = [
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"]
]
let snake = [[8,1], [8,2], [8,3]];

function reset()
{
    plateau = [
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"]
    ];
    snake = [[8,1], [8,2], [8,3]];
    score = 0;
    vitesse = 200;
    niveau = 1;
    direction = "right";
    changementDirection = false;
    grandis = false;
}

function init()
{
    for(var i = 0; i < snake.length; i++)
    {
        plateau[snake[i][0]][snake[i][1]] = "SNAKE";
    }
    for(var i = 0; i < plateau.length; i++)
    {
        for(var j = 0; j < plateau[0].length; j++)
        {
            if(i===0 || j===0 || i===19 || j===19)
            {
                plateau[i][j] = "WALL";
            }
        }
    }
    pomme();
}

function pomme()
{
    var possibleSquares = [];
    for(var i = 0; i < plateau.length; i++)
    {
        for(var j = 0; j < plateau[0].length; j++)
        {
            if(plateau[i][j]==="EMPTY")
            {
                possibleSquares.push([i,j]);
            }
        }
    }
    
    var randomIndex = Math.floor(Math.random() * possibleSquares.length);
    plateau[possibleSquares[randomIndex][0]][possibleSquares[randomIndex][1]]="FOOD";
}

function Manger()
{
    score = score + 1;
    if(score/5 >= niveau)
    {
        niveau = niveau + 1;
        vitesse = vitesse - 15;
        clearInterval(game);
        game = setInterval(
            function() {
                newFrame();
            }, vitesse
        );
    }
    tempNode = document.getElementById("score");
    while (tempNode.firstChild)
    {
        tempNode.removeChild(tempNode.lastChild);
    }
    tempNode.appendChild(document.createTextNode(score));
    grandis = true;
    pomme();
}

function mort()
{
    clearInterval(game);
    showRestartScreen();
}

function showRestartScreen()
{
    tempNode = document.getElementById("pScore");
    while (tempNode.firstChild)
    {
        tempNode.removeChild(tempNode.lastChild);
    }
    tempNode.appendChild(document.createTextNode("Score : " + score));
    document.getElementById("divRestart").className="restartScreen";
}

function taille(direction)
{
    var headCoord = snake[snake.length-1];

    switch(direction)
    {
        case "right":
            snake.push([headCoord[0],headCoord[1]+1]);
            break;
        case "up":
            snake.push([headCoord[0]-1,headCoord[1]]);
            break;
        case "left":
            snake.push([headCoord[0],headCoord[1]-1]);
            break;
        case "down":
            snake.push([headCoord[0]+1,headCoord[1]]);
            break;
    }

    var oldTail = snake[0];
    var newHead = snake[snake.length-1];
    var oldTailAndNewHead = [oldTail, newHead];
    if(grandis==false)
    {
        snake.shift();
    }
    return oldTailAndNewHead;
}

function majPlateau(oldTailAndNewHead)
{
    var oldTail = oldTailAndNewHead[0];
    var newHead = oldTailAndNewHead[1];
    if(grandis==false)
    
    {
        plateau[oldTail[0]][oldTail[1]] = "EMPTY";
    }
    else
    {
        grandis = false;
    }
    if(plateau[newHead[0]][newHead[1]]==="SNAKE" || plateau[newHead[0]][newHead[1]]==="WALL")
    {
        mort();
    }
    else
    {
        if(plateau[newHead[0]][newHead[1]]==="FOOD")
        {
            Manger();
        }
    }
    plateau[newHead[0]][newHead[1]] = "SNAKE";
}

function displayCanvas()
{
    ctx.strokeStyle = "silver";
    for(var i = 0; i < plateau.length; i++)
    {
        ctx.beginPath();
        ctx.moveTo(i*width, 0);
        ctx.lineTo(i*width, 800);
        ctx.moveTo(0, i*width);
        ctx.lineTo(800, i*width);
        ctx.stroke();
    }
    
    for(var i = 0; i < plateau.length; i++)
    {
        for(var j = 0; j < plateau[0].length; j++)
        {
            if(plateau[i][j]=="SNAKE")
            {
                if(snake[snake.length-1][0]==i && snake[snake.length-1][1]==j)
                {
                    var y = i*width;
                    var x = j*height;
                    ctx.fillStyle = couleurTete;

                    ctx.fillRect(x, y, width, height);
                }
                else
                {
                    var y = i*width;
                    var x = j*height;
                    ctx.fillStyle = couleurSnake;

                    ctx.fillRect(x, y, width, height);
                }
            }
            else
            {
                if(plateau[i][j]=="FOOD")
                {
                    var y = i*width;
                    var x = j*height;
                    ctx.fillStyle = couleurPomme;

                    ctx.fillRect(x, y, width, height);
                }   
                else
                {
                    if(plateau[i][j]=="WALL")
                    {
                        var y = i*width;
                        var x = j*height;
                        ctx.fillStyle = couleurMur;

                        ctx.fillRect(x, y, width, height);
                    }   
                }
            }
        }
    }
}

function newFrame()
{
    changementDirection = false;
    var oldTailAndNewHead = taille(direction);
    majPlateau(oldTailAndNewHead);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    displayCanvas();
}

function debut()
{
    document.getElementById("divMenu").className = "displayNone";
    document.getElementById("divGame").className = "";
    document.onkeydown = function(event){
        var keyCode;
        if(event == null)
        {
            keyCode = window.event.keyCode;
        }
        else
        {
            keyCode = event.keyCode;
        }

        switch(keyCode)
        {
            case 37:
                if(direction!=="right" && direction!=="left")
                {
                    if (changementDirection == false)
                    {
                        direction = "left";
                        changementDirection = true;
                    }
                }
                break;
            case 38:
                if(direction!=="down" && direction!=="up")
                {
                    if (changementDirection == false)
                    {
                        direction = "up";
                        changementDirection = true;
                    }
                }
                break;
            case 39:
                if(direction!=="left" && direction!=="right")
                {
                    if (changementDirection == false)
                    {
                        direction = "right";
                        changementDirection = true;
                    }
                }
                break;
            case 40:
                if(direction!=="up" && direction!=="down")
                {
                    if (changementDirection == false)
                    {
                        direction = "down";
                        changementDirection = true;
                    }
                }
                break;
            default:
                break;
        }
    }
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    init();
    displayCanvas();
    game = setInterval(
        function() {
            newFrame();
        }, vitesse
    );
}

function recommencer()
{
    reset();
    debut();
    document.getElementById("divRestart").className="displayNone";
}

document.getElementById("buttonStartGame").addEventListener("click", debut);
document.getElementById("buttonRestartGame").addEventListener("click", recommencer);
