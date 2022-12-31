radio.setGroup(1)

input.onGesture(Gesture.LogoUp,function(){
    radio.sendString("Arrow S")
})

input.onGesture(Gesture.LogoDown,function(){
    radio.sendString("Arrow N")
})

input.onGesture(Gesture.TiltLeft,function(){
    radio.sendString("Arrow W")
})

input.onGesture(Gesture.TiltRight,function(){
    radio.sendString("Arrow E")

input.onButtonPressed(Button.A,function(){
    radio.sendString("Arrow S E")
})

input.onButtonPressed(Button.B,function(){
    radio.sendString("Arrow S W")
})

})

radio.onReceivedString(function(onReceivedString){
    if (onReceivedString == "Arrow N"){
        basic.showArrow(ArrowNames.North)
        }

    else if (onReceivedString == "Arrow S"){
        basic.showArrow(ArrowNames.South)
    }

    else if(onReceivedString == "Arrow E"){
        basic.showArrow(ArrowNames.East)
    }

    else if(onReceivedString == "Arrow W"){
        basic.showArrow(ArrowNames.West)
    }

    else if(onReceivedString == "Arrow N W"){
        basic.showArrow(ArrowNames.NorthWest)
    }

    else if (onReceivedString == "Arrow N E"){
        basic.showArrow(ArrowNames.NorthEast)
    }
})