let Nb_personne = 0
input.onButtonPressed(Button.A, function () {
    Nb_personne += 1
})
input.onButtonPressed(Button.AB, function () {
    Nb_personne = 0
})
input.onButtonPressed(Button.B, function () {
    Nb_personne += -1
})
basic.forever(function () {
    basic.showNumber(Nb_personne)
})
basic.forever(function () {
    if (Nb_personne >= 10) {
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
})
