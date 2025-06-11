class CarCustomizer:
    def __init__(self):
        self.color = ""
        self.engine_type = ""
        self.accessories = []

    def choose_color(self, color):
        self.color = color

    def choose_engine(self, engine_type):
        self.engine_type = engine_type

    def add_accessory(self, accessory):
        self.accessories.append(accessory)

    def show_summary(self):
        print("🚘 Your Customized Ride:")
        print(f"- Color: {self.color}")
        print(f"- Engine Type: {self.engine_type}")
        print(f"- Accessories: {', '.join(self.accessories)}")


# Create object
my_car = CarCustomizer()

# User choices
my_car.choose_color("Midnight Black")
my_car.choose_engine("Electric")
my_car.add_accessory("Sunroof")
my_car.add_accessory("LED Headlights")
my_car.add_accessory("Leather Seats")

# Display customized ride
my_car.show_summary()
