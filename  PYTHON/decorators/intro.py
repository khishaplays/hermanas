"""
A decorator is a function that modifies or extends the behavior of another function without changing its actual code.

Think of it as “wrapping” a function with extra functionality.

setting up: should take another function as an argument/parameter.
:should have a wrapper function inside it that defines the additional behavior.
:should return the wrapper function.

to use a deco in your function, you can use the @ symbol followed by the decorator function name before the function definition.

"""
def my_deco(func):
    def wrapper():
        print("Before calling the function")
        func()  # Call the original function
        print("After calling the function")
    return wrapper

def hello():
    print("Hello, World!")  
    print("This is a simple function.")

@my_deco
def french_hello():
    print("Bonjour, le monde!")  
    print("Ceci est une fonction simple.")  

french_hello()  # This will call the decorated function