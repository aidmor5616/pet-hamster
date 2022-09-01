input.onButtonPressed(Button.A, function () {
    health += 2
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
	
})
let health = 10
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
})
basic.forever(function () {
    health += -1
    basic.pause(2000)
})
