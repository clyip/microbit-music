input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Whole))
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    music.rest(music.beat(BeatFraction.Whole))
    basic.showString("B")
})
basic.forever(function () {
    if (input.compassHeading() >= 0 && input.compassHeading() < 90) {
        basic.showString("1")
        music.ringTone(262)
    } else if (input.compassHeading() >= 90 && input.compassHeading() < 180) {
        basic.showString("3")
        music.ringTone(330)
    } else if (input.compassHeading() >= 180 && input.compassHeading() < 270) {
        basic.showString("5")
        music.ringTone(392)
    } else {
        basic.showString("8")
        music.ringTone(523)
    }
})
