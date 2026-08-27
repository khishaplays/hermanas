# Testing **kwargs

def my_kwargs(**kwargs):
    print("Type of kwargs is:", type(kwargs))
    print("kwargs content:", kwargs)
    # print("b is", kwargs.get("b"))


# Scenario 1
my_kwargs(name="Samson", email="Sam@sam.com", dict={"a": "a"})


# Rectangle Area Function 

def area_rectangle(length, width):
    area = length * width
    print(f"For rectangle with length {length} and width {width}, area is {area}")
    return area


# Option 1: Positional arguments (order matters)
area_rectangle(5, 2)

# Option 2: Variables as positional arguments
width = 4
length = 39
area_rectangle(width, length)          # This swaps them! (width becomes length)

# Option 3: Keyword arguments (order does NOT matter)
area_rectangle(width=10, length=55)
area_rectangle(length=55, width=10)    # same result