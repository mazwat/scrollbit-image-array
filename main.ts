//  Init variables
let ledNumber = 0
let height = scrollbit.rows()
let width = scrollbit.cols()
let totalPixels = scrollbit.rows() * scrollbit.cols()
//  Sample image arrays for custom images 17x7 in grayscale from 0-255
let eyePic = [255, 255, 255, 110, 110, 110, 110, 110, 110, 110, 255, 255, 110, 110, 255, 255, 255, 255, 255, 110, 110, 110, 80, 80, 0, 0, 0, 80, 150, 80, 110, 110, 110, 255, 255, 110, 110, 150, 150, 150, 80, 80, 80, 255, 80, 110, 150, 80, 110, 150, 255, 255, 110, 110, 150, 110, 80, 150, 0, 0, 255, 150, 255, 110, 150, 150, 110, 255, 255, 110, 150, 110, 110, 150, 150, 0, 0, 80, 150, 255, 255, 110, 110, 255, 255, 255, 110, 255, 110, 110, 110, 150, 150, 150, 150, 110, 110, 110, 80, 255, 255, 255, 255, 255, 110, 110, 110, 110, 110, 110, 110, 110, 110, 255, 255, 255, 255, 255, 255]
let bitFigures = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 110, 255, 200, 255, 255, 200, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 200, 255, 200, 200, 200, 200, 255, 255, 0, 255, 0, 0, 0, 0, 255, 255, 255, 200, 255, 200, 110, 200, 110, 255, 255, 0, 255, 200, 110, 200, 0, 255, 255, 255, 200, 255, 110, 110, 110, 110, 255, 255, 110, 255, 110, 110, 110, 0, 0, 255, 255, 110, 150, 150, 150, 150, 200, 200, 255, 255, 0, 0, 0, 0, 0, 255, 110, 255, 200, 255, 150, 150, 150, 200, 200, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 255, 150, 150, 150, 150, 200]
let arm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 110, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 110, 110, 110, 150, 150, 150, 150, 150, 0, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 80, 200, 200, 0, 0, 0, 0, 110, 110, 110, 110, 110, 110, 150, 150, 110, 80, 200, 200, 0, 0, 0, 0, 0, 110, 110, 110, 110, 110, 110, 110, 110, 110, 80, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    //  The offset determines the distances from the head to the tail of the chaser lights
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
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let head: number[];
    let test: number;
    let ledNumber = 0
    //  The offset determines the distances from the head to the tail of the chaser lights
    while (ledNumber <= totalPixels) {
        //  Send grid number and use function to output x and y. Added a 1 to be at the correct point in the array
        head = ledPos(ledNumber +1)
        //  Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness based on the image array above.
        scrollbit.setPixel(head[0], head[1], arm[ledNumber])
        scrollbit.show()
        ledNumber += 1
    }
})
