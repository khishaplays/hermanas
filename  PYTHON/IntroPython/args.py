# *args example (arguments become a tuple)

def my_args(*args):
    print(f"Type of args: {type(args)}")
    print(args)
    print(f"First argument: {args[0]}")
    print("---------------------------")


my_args(30, 67, 97, 100)
my_args("Hello", True, 34)


# Rectangle area function
def area_rectangle(length, width):
    area = length * width
    print("---------------------------")
    print(f"For rectangle with length {length} and width {width}, area is {area}")
    print("---------------------------")


area_rectangle(20, 10)


# Function that can sum any number of values using *args
def sum2(*args):
    total = 0
    for n in args:
        print(f"n is {n}")
        total = total + n
    print(f"Sum is {total}")
    return total


sum2(29, 49, 34, 40, 69, 98)