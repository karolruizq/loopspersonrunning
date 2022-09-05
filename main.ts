basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . # . # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            # # # # .
            . . # . #
            . # # . .
            # . . # .
            `)
        basic.pause(500)
    }
})
