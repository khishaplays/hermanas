#  CONDITIONS
age = 20

if age > 18:
    print("You can drink")
    print("Something Else")
    
    if age == 23:
        print("This is awesome")
    
    print("Another line")

elif age == 44:
    print("You are not that young")

else:
    print("Last else")


# WHILE LOOP
k = 0

while k < 30:
    k = k + 1
    print("K is", k)


# FOR LOOP WITH RANGE 
# range(start, stop, step)
print("\n--- Range loop ---")
for i in range(0, 5, 1):
    print("I is", i)


#  LOOPING THROUGH A LIST 
ar = [23, "hello", 67, 45, 40]

print("\n--- Using index ---")
for i in range(0, len(ar)):
    single_item = ar[i]
    print(single_item)

print("\n--- Direct loop (better way) ---")
for single_item in ar:
    print("Single item", single_item)