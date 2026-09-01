def log_deco(func):
    def wrapper(*args, **kwargs):
        print("Args ", args)
        print("Kwargs ", kwargs)
        result = func(*args, **kwargs)  # Call the original function
        print(f"Function called was{func.__name__}")
        print ("Result", result)
        
    return wrapper

@log_deco
def hello():
    print("Hello,khisha!")  
    return 456

@log_deco
def sum(a, b):
    ans=a+b
    return ans

sum(a=45, b=67)#kwargs
sum(4,5)#args
    

