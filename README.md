input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Giraffe)
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
})



> Open this page at [https://aidmor5616.github.io/pet-hamster/](https://aidmor5616.github.io/pet-hamster/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/aidmor5616/pet-hamster** and import

## Edit this project ![Build status badge](https://github.com/aidmor5616/pet-hamster/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/aidmor5616/pet-hamster** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/aidmor5616/pet-hamster/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
