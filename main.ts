let field: number;
while (true) {
    field = input.magneticForce(Dimension.X)
    if (Math.abs(field) < 200) {
        basic.showIcon(IconNames.No, 0)
    } else {
        basic.clearScreen()
    }
    
    basic.pause(100)
}
