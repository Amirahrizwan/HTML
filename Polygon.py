import turtle

# Function to draw a polygon
def draw_polygon(sides, length):
    angle = 360 / sides
    for _ in range(sides):
        turtle.forward(length)
        turtle.right(angle)

# Customize your polygon
sides = int(input("Enter number of sides: "))
length = int(input("Enter length of each side: "))

# Set up turtle
turtle.speed(2)
draw_polygon(sides, length)

# To prevent window from closing immediately
turtle.done()
