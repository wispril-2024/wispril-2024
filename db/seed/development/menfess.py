import random

target_user = [
    "c0aeedad-4963-448a-8142-f8b72646f2ba",  # user1
    "1bed95b3-ddd6-4520-93ba-ab197ed2f0ff",  # user2
    "78d9f2e8-8321-464d-ab44-6de12574ccb3",  # user3
]

from_name = ["Anonymoys", "Cinta mu", "Siapa aja deh", "NULL"]

lorem_ipsum_variations = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. ",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
]

data = []

for num in range(1, 101):
    # Generate random major and faculty
    from_it = random.choice(from_name)
    target_it = random.choice(target_user)
    message_it = random.choice(lorem_ipsum_variations)

    # From
    from_final = "NULL" if from_it == "NULL" else f"'{from_it}'"

    data.append(f"(DEFAULT, {from_final}, '{message_it}','{target_it}')")

# Write to file "user.txt"
with open("db/seed/menfess.txt", "w") as f:
    for i in range(0, 100):
        f.write(data[i])
        if i != 99:
            f.write(",\n")
        else:
            f.write(";\n")
