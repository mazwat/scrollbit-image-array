# Init variables
ledNumber = 0
height = scrollbit.rows()
width = scrollbit.cols()
totalPixels = scrollbit.rows() * scrollbit.cols()


# Function takes a numbered grid array of values and converts them into cartesion X and Y
def ledPos(number: number):
    # Calculate x value from the array number
    xpos = (number - 1) % width
    # Calculate y value from the array number
    ypos = Math.round((number - 1) / width)
    # return value as tuple
    return [xpos, ypos]

# Create a chaser of lights with a start point (head) and an end point (tail) using A button   
def on_button_pressed_a():
    ledNumber = 0
    offset = randint(0, 50)
    while ledNumber <= totalPixels + offset:
        ledNumber += 1
        # Send grid number and use function to output x and y
        head = ledPos(ledNumber)
        tail = ledPos(ledNumber - offset)
        # Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness randomly
        scrollbit.set_pixel(head[0], head[1], randint(0, 255))
        scrollbit.set_pixel(tail[0], tail[1], 0)
        scrollbit.show()
input.on_button_pressed(Button.A, on_button_pressed_a)