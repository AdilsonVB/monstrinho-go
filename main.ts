/**
 * steps = passos
 */
/**
 * mg = miligravidade
 */
/**
 * 1500 = qto mais perto do mil mais refinado fica a aceleração
 */
let steps = 0
/**
 * para criar senão se clica no +
 */
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    } else if (steps == 15) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # . #
            . . . # .
            . # . . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.Snake)
        for (let index = 0; index < 5; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        basic.pause(6000)
        basic.clearScreen()
        steps = 0
    }
})
