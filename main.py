# Init variables
ledNumber = 0
height = scrollbit.rows()
width = scrollbit.cols()
totalPixels = scrollbit.rows() * scrollbit.cols()
# Sample image arrays for custom images 17x7 in grayscale from 0-255
eyePic = [255,255,255,110,110,110,110,110,110,110,255,255,110,110,255,255,255,
255,255,110,110,110,80,80,0,0,0,80,150,80,110,110,110,255,
255,110,110,150,150,150,80,80,80,255,80,110,150,80,110,150,255,
255,110,110,150,110,80,150,0,0,255,150,255,110,150,150,110,255,
255,110,150,110,110,150,150,0,0,80,150,255,255,110,110,255,255,
255,110,255,110,110,110,150,150,150,150,110,110,110,80,255,255,255,
255,255,110,110,110,110,110,110,110,110,110,255,255,255,255,255,255]

bitFigures = [255,255,255,255,255,255,255,255,255,255,110,255,200,255,255,200,255,
255,255,255,255,0,0,0,0,255,255,200,255,200,200,200,200,255,
255,0,255,0,0,0,0,255,255,255,200,255,200,110,200,110,255,
255,0,255,200,110,200,0,255,255,255,200,255,110,110,110,110,255,
255,110,255,110,110,110,0,0,255,255,110,150,150,150,150,200,200,
255,255,0,0,0,0,0,255,110,255,200,255,150,150,150,200,200,
255,255,255,0,0,0,0,255,255,255,255,255,150,150,150,150,200]

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
scrollbit.scroll_text("Loads array images and wipes them. Press A - Wipe and Press B - Load Image")

# Create a chaser of lights with a start point (head) and an end point (tail) using A button   
def on_button_pressed_a():
    ledNumber2 = 0
    # The offset determines the distances from the head to the tail of the chaser lights
    offset = randint(0, 85)
    while ledNumber2 <= totalPixels + offset:
        # Send grid number and use function to output x and y
        head = ledPos(ledNumber2)
        tail = ledPos(ledNumber2 - offset)
        # Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness randomly
        scrollbit.set_pixel(head[0], head[1], randint(0, 255))
        scrollbit.set_pixel(tail[0], tail[1], 0)
        scrollbit.show()
        ledNumber2 += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    ledNumber3 = 0
    # The offset determines the distances from the head to the tail of the chaser lights
    while ledNumber3 <= totalPixels:
        # Send grid number and use function to output x and y. Added a 1 to be at the correct point in the array
        head2 = ledPos(ledNumber3 + 1)
        # Assign tuple values to x and y to set pixel position in the Scroll:Bit. Set brightness based on the image array above.
        scrollbit.set_pixel(head2[0], head2[1], arm[ledNumber3])
        scrollbit.show()
        ledNumber3 += 1
input.on_button_pressed(Button.B, on_button_pressed_b)
