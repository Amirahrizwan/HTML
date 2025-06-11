import math
import turtle

# Set up the screen
screen = turtle.Screen()
screen.bgcolor("black")

# Create turtle
pen = turtle.Turtle()
pen.pencolor("cyan")
pen.speed(0)

# Draw the spiral helix
for i in range(200):
    pen.forward(math.sqrt(i) * 10)  # Move forward with increasing distance
    pen.left(45)  # Turn left to create spiral

pen.hideturtle()
turtle.done()
