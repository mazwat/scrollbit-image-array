let ledNumber = 0
let height = scrollbit.rows()
let width = scrollbit.cols()
let totalPixels = scrollbit.rows() * scrollbit.cols()
basic.forever(function on_forever() {
    let head: number[];
    let tail: number[];
    let ledNumber = 0
    let offset = randint(0, 80)
    while (ledNumber <= totalPixels + offset) {
        ledNumber += 1
        head = ledPos(ledNumber)
        tail = ledPos(ledNumber - offset)
        scrollbit.setPixel(head[0], head[1], randint(0, 255))
        scrollbit.setPixel(tail[0], tail[1], 0)
        scrollbit.show()
    }
})
function ledPos(number: number): number[] {
    let xpos = (number - 1) % width
    let ypos = Math.round((number - 1) / width)
    return [xpos, ypos]
}

