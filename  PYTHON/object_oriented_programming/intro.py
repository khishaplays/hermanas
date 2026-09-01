"""
object oriented programming.
<3 Python, C++, JAVA, etc>

Concept in programming to make
work easy by using principles.

1. Encapsulation
   - keeping data and methods/functions inside a class
     while restricting direct access to internal data.

2. Abstraction
   - Hiding unnecessary complexity or implementation of details.

3. Inheritance
   - one class to reuse or extend properties
     and methods of another class.

4. Polymorphism
   - appearing in different forms. Method can
     have different behaviours.

JS and python are object oriented.

-> number.toString(), string.toLowerCase()

-> class
   - blueprint for an object.

-> Class could be an architectural drawing of a house.
   object -> implementation of the drawing.

# fields <properties>
"""

class House:
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 120
    owner = ""
    location = ""
    architect = "KIMANI"

    def config(self, owner, location):
        self.owner = owner
        self.location = location

    def print_self(self):
        # this <the object itself>
        print(self)
        print(self.__dict__)  # dictionary <print all properties>


# When accessing object properties use dot notation
# Bracket notation is for dictionary

# -> method . config
# -> print self

macrine_house = House()

# macrine_house.owner = "Macrine"
# macrine_house.location = "Kikuyu"

macrine_house.config(owner="Macrine", location="Kikuyu")

print(f"Macrine's House Owner {macrine_house.owner}")
print(f"Macrine's Location {macrine_house.location}")
print(f"Macrine's House Bedrooms {macrine_house.bedrooms}")
print(f"Macrine's House Bathrooms {macrine_house.bathrooms}")
print(f"Macrine's House Floors {macrine_house.floors}")
print(f"Macrine's House Area {macrine_house.area}")
print(f"Macrine's House Designer {macrine_house.architect}")
print("Printing Macrine's house")
macrine_house.print_self()

print("End of print Macrine's")


daniel_house = House()

# daniel_house.owner = "Daniel"
# daniel_house.location = "Muranga"

daniel_house.config(owner="Daniel", location="Muranga")

print(f"Daniel's House Owner {daniel_house.owner}")
print(f"Daniel's Location {daniel_house.location}")
print(f"Daniel's House Bedrooms {daniel_house.bedrooms}")
print(f"Daniel's House Bathroom {daniel_house.bathrooms}")
print(f"Daniel's House Floors {daniel_house.floors}")
print(f"Daniel's House Area {daniel_house.area}")
print(f"Daniel's House Designer {daniel_house.architect}")
print("Printing Daniel's house")
daniel_house.print_self()

print("End of print Daniel's")