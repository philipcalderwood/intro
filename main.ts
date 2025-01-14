input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.LoopingInBackground)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.AB, function () {
    led.plot(2, 1)
    music.stopAllSounds()
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
    }
})
led.setBrightness(255)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
