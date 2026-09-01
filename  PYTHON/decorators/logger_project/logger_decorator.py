"""
log decorator function that logs the arguments and keyword arguments passed to the decorated function, as well as the result of the function call.
knowledge of decorators, function arguments, and keyword arguments in Python is required to understand this code..
also python's file handling and logging modules can be used to enhance the functionality of this decorator by logging the information to a file instead of printing it to the console.
"""
import time
from datetime import date, datetime 

def logger(func):
    def wrapper(*args, **kwargs):
        # Log the function call with arguments and keyword arguments
        start_time=time.time()
        print(f"start time ${start_time}")
        result = func(*args, **kwargs)  # Call the original function
        end_time=time.time()
        diff=end_time-start_time
        diff_in_milliseconds=round(diff*1000, 2)
        today = date.today()
        timestamp=datetime.now().isoformat()
        with open(f"{today}.txt", "a") as f:
            f.write(f"{timestamp} - Function '{func.__name__}' called with arguments: {args} and keyword arguments: {kwargs}. Result: {result}. Execution time: {diff_in_milliseconds} ms\n")   
     
        return result  # Return the result of the original function
    
    return wrapper
@logger
def hello():
    print("Hello,khisha!")  

@logger
def big_count():
    for i in range(0, 1000000):
        print(i)
        pass

hello()
big_count()