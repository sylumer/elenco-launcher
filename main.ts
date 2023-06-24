function launch () {
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # # # .
        # # # # #
        `)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    ready()
}
input.onButtonPressed(Button.A, function () {
    launch()
})
function ready () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Chessboard)
}
ready()
