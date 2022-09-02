input.onButtonPressed(Button.A, function () {
    health += 2
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    sleep += 3
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    health += -10
})
let health = 10
let sleep = 20
basic.forever(function () {
    basic.showLeds(`
        . # # . .
        . # # . .
        . . # # #
        . . # . #
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        . # # # .
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . # # .
        # # # . .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . # # # .
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . # # # .
        . # . # .
        . . . . .
        `)
    if (health == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            # # . . .
            # # . . .
            `)
        basic.pause(2000)
        basic.showString("you ugly")
    }
    if (sleep == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            # # # # #
            `)
    }
})
basic.forever(function () {
    health += -1
    basic.pause(2000)
})
basic.forever(function () {
    sleep += -2
    basic.pause(1000)
})
