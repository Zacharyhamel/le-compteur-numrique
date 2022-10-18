Nb_personne = 0

def on_button_pressed_a():
    global Nb_personne
    Nb_personne += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Nb_personne
    Nb_personne = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Nb_personne
    Nb_personne += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if Nb_personne >= 10:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
basic.forever(on_forever)
