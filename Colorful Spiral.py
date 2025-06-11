import turtle
import colorsys

# Set up screen
screen = turtle.Screen()
screen.bgcolor("black")

# Create turtle
spiral = turtle.Turtle()
spiral.speed(0)
spiral.width(2)

# Define colors using HSV
colors = []
hue = 0.0
for i in range(360):
    col = colorsys.hsv_to_rgb(hue, 1, 1)
    colors.append(col)
    hue += 0.0028

# Draw spiral
for i in range(360):
    spiral.color(colors[i])
    spiral.forward(i * 3 / 2)
    spiral.left(59)
    spiral.forward(i / 2)

spiral.hideturtle()
turtle.done()
