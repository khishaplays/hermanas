# Function to calculate area of a circle

def area_circle(radius):
    ans = 3.142 * (radius ** 2)          # better than pow()
    print(f"For circle of radius {radius}, area is {ans}")
    return ans                           # return the value


# Calling the function
area_circle(20)

# Assigning function to another variable (this is allowed in Python)
new_f = area_circle

new_f(10)