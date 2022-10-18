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
    basic.showNumber(Math.constrain(Nb_personne, 0, 100))
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
