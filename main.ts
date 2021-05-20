//  Init variables
let ledNumber = 0
let height = scrollbit.rows()
let width = scrollbit.cols()
let totalPixels = scrollbit.rows() * scrollbit.cols()
//  Function takes a numbered grid array of values and converts them into cartesion X and Y
function ledPos(number: number): number[] {
    //  Calculate x value from the array number
    let xpos = (number - 1) % width
    //  Calculate y value from the array number
    let ypos = Math.floor((number - 1) / width)
    //  return value as tuple
    return [xpos, ypos]
}

//  Create a chaser of lights with a start point (head) and an end point (tail) using A button   
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let head: number[];
    let tail: number[];
    let ledNumber = 0
    let offset = randint(0, 85)
    while (ledNumber <= totalPixels + offset) {
        //  Send grid number and use function to output x and y
        head = ledPos(ledNumber)
        tail = ledPos(ledNumber - offset)
        //  Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness randomly
        scrollbit.setPixel(head[0], head[1], randint(0, 255))
        scrollbit.setPixel(tail[0], tail[1], 0)
        scrollbit.show()
        ledNumber += 1
    }
})
