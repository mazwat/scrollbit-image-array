ledNumber = 0
height = scrollbit.rows()
width = scrollbit.cols()
totalPixels = scrollbit.rows() * scrollbit.cols()

def on_forever():
    ledNumber = 0
    offset = randint(0, 80)
    while ledNumber <= totalPixels + offset:
        ledNumber += 1
        head = ledPos(ledNumber)
        tail = ledPos(ledNumber - offset)
        scrollbit.set_pixel(head[0], head[1], randint(0, 255))
        scrollbit.set_pixel(tail[0], tail[1], 0)
        scrollbit.show()
basic.forever(on_forever)


def ledPos(number: number):
    xpos = (number - 1) % width
    ypos = Math.round((number - 1) / width)
    return [xpos, ypos]