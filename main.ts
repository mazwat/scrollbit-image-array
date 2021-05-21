//  Init variables
let ledNumber = 0
let height = scrollbit.rows()
let width = scrollbit.cols()
let totalPixels = scrollbit.rows() * scrollbit.cols()
let frameRate = 200
//  Sample image arrays for custom images 17x7 in grayscale from 0-255
let eyePic1 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 64, 64, 0, 0, 0, 64, 98, 64, 255, 255, 255, 255, 255, 255, 255, 98, 98, 98, 64, 64, 64, 255, 64, 160, 98, 64, 255, 255, 255, 255, 255, 255, 98, 160, 64, 98, 0, 0, 255, 98, 255, 160, 98, 98, 255, 255, 255, 255, 98, 160, 255, 98, 98, 0, 0, 64, 98, 255, 64, 160, 255, 255, 255, 255, 255, 255, 255, 255, 160, 98, 98, 98, 98, 160, 64, 160, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
let eyePic2 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 98, 64, 98, 0, 0, 255, 98, 98, 160, 255, 255, 255, 255, 255, 255, 98, 160, 255, 98, 98, 0, 0, 64, 98, 255, 64, 160, 255, 255, 255, 255, 255, 255, 255, 255, 160, 98, 98, 98, 98, 160, 64, 160, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
let eyePic3 = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
let bitFigures = [0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 255, 255, 0, 0, 0, 0, 63, 63, 63, 63, 63, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 63, 160, 32, 160, 32, 0, 0, 0, 255, 255, 0, 255, 0, 0, 0, 0, 0, 160, 160, 160, 160, 160, 0, 0, 0, 255, 255, 255, 128, 128, 0, 0, 0, 160, 32, 255, 32, 255, 32, 160, 0, 255, 255, 255, 255, 255, 32, 255, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0]
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

//  Function takes a numbered grid array of values and converts them into cartesion X and Y
function displayImage(image: number[]) {
    let head: number[];
    scrollbit.clear()
    for (let i = 0; i < totalPixels; i++) {
        head = ledPos(i + 1)
        //  Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness based on the image array above.
        scrollbit.setPixel(head[0], head[1], image[i])
    }
    scrollbit.show()
}

//  Instructions scroller
//  scrollbit.scroll_text("Press A - Load Image & Press B - Wipe Image")
//  Create a chaser of lights with a start point (head) and an end point (tail) using A button   
input.onButtonPressed(Button.B, function on_button_pressed_b() {
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
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let head: number[];
    let ledNumber = 0
    //  The offset determines the distances from the head to the tail of the chaser lights
    while (ledNumber <= totalPixels) {
        //  Send grid number and use function to output x and y. Added a 1 to be at the correct point in the array
        head = ledPos(ledNumber + 1)
        //  Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness based on the image array above.
        scrollbit.setPixel(head[0], head[1], eyePic1[ledNumber])
        scrollbit.show()
        ledNumber += 1
    }
})
basic.forever(function on_forever() {
    displayImage(eyePic1)
    basic.pause(frameRate)
    displayImage(eyePic2)
    basic.pause(frameRate)
    displayImage(eyePic3)
    basic.pause(500)
    displayImage(eyePic2)
    basic.pause(frameRate)
    displayImage(eyePic1)
    basic.pause(frameRate)
})
