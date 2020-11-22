class Form {
    connstructor(){

    }

display(){
var title = createElement("h2")
title.html("Car Racing")
title.position(150,0);

var input =createInput("name")
input.position(100,200);

var button =createButton("Play")
button.position(150,300);

var greeting = createElement("h4")
button.mousePressed(
    function(){
        input.hide()
        button.hide()
        var name = input.value()
        playerCount += 1
        player.update(name)
        player.update(playerCount)
        greeting.html("Hello "+name + " !")
        greeting.position(150,200)
    }
)

}

}