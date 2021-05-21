# Init variables
ledNumber = 0
height = scrollbit.rows()
width = scrollbit.cols()
totalPixels = scrollbit.rows() * scrollbit.cols()

# Sample image arrays for custom images 17x7 in grayscale from 0-255

eyePic = [255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,
255,255,255,255,255,64,64,0,0,0,64,98,64,255,255,255,255,
255,255,255,98,98,98,64,64,64,255,64,160,98,64,255,255,255,
255,255,255,98,160,64,98,0,0,255,98,255,160,98,98,255,255,
255,255,98,160,255,98,98,0,0,64,98,255,64,160,255,255,255,
255,255,255,255,255,160,98,98,98,98,160,64,160,255,255,255,255,
255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255]

bitFigures = [0,0,0,0,0,0,0,63,0,0,0,0,0,255,255,0,0,
0,0,63,63,63,63,63,0,0,0,0,255,255,255,255,0,0,
0,0,63,160,32,160,32,0,0,0,255,255,0,255,0,0,0,
0,0,160,160,160,160,160,0,0,0,255,255,255,128,128,0,0,
0,160,32,255,32,255,32,160,0,255,255,255,255,255,32,255,0,
0,0,255,255,255,255,255,0,0,0,255,255,255,255,255,0,0,
0,0,255,0,0,0,255,0,0,0,128,0,0,0,128,0,0]

arm = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,200,110,110,0,0,0,0,0,0,
0,0,0,0,0,0,0,200,110,110,110,150,150,150,150,150,0,
110,110,110,110,110,110,110,110,110,110,80,200,200,0,0,0,0,
110,110,110,110,110,110,150,150,110,80,200,200,0,0,0,0,0,
110,110,110,110,110,110,110,110,110,80,200,200,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

# Function takes a numbered grid array of values and converts them into cartesion X and Y
def ledPos(number: number):
    # Calculate x value from the array number
    xpos = (number - 1) % width
    # Calculate y value from the array number
    ypos = Math.floor((number - 1) / width)
    # return value as tuple
    return [xpos, ypos]

# Instructions scroller
scrollbit.scroll_text("Press A - Load Image & Press B - Wipe Image")

# Create a chaser of lights with a start point (head) and an end point (tail) using A button   
def on_button_pressed_b():
    ledNumber = 0
    # The offset determines the distances from the head to the tail of the chaser lights
    offset = randint(0, 85)
    while ledNumber <= totalPixels + offset:
        # Send grid number and use function to output x and y
        head = ledPos(ledNumber)
        tail = ledPos(ledNumber - offset)
        # Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness randomly
        scrollbit.set_pixel(head[0], head[1], randint(0, 255))
        scrollbit.set_pixel(tail[0], tail[1], 0)
        scrollbit.show()
        ledNumber += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_a():
    ledNumber = 0
    # The offset determines the distances from the head to the tail of the chaser lights
    while ledNumber <= totalPixels:
        # Send grid number and use function to output x and y. Added a 1 to be at the correct point in the array
        head = ledPos(ledNumber + 1)
        # Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness based on the image array above.
        scrollbit.set_pixel(head[0], head[1], eyePic[ledNumber])
        scrollbit.show()
        ledNumber += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

