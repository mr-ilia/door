while True:
    field = input.magnetic_force(Dimension.X)
    if abs(field) < 200:
        basic.show_icon(IconNames.NO, 0)
    else:
        basic.clear_screen()
    basic.pause(100)
