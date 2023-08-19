source_location = "../../../التفصيل الموضوعي.txt"
extraction_location = "../tafseer.json"

_encoding = "utf-8"
def add(content, last = False):
    with open(extraction_location, "a", encoding=_encoding) as file:
        file.write("\n\t")
        file.write(f"\"{content[0]}\": \"{content[1]}\"")
        if not last:
            file.write(",\n")
        else:
            file.write("\n\t")

with open(source_location, "r", encoding=_encoding) as file:
    lines = list(map(lambda a: a.strip(), file.readlines()))[3:]

content = []

counter = 1
for line in lines:
    if not line: continue
    if line.startswith('_'): counter+=1; continue

    if line[0].isdigit():
        if '-' in line:
            frm, to = line.split('-')
            string = f"s{counter}from{frm}to{to}"
        else:
            string = f"s{counter}from{line}"
        content.append([string])
    else:
        content[-1].append(line)



y = input("Alert: The old .json file content will be removed\n Are you sure you want to continue ? (Y / N) ")

if y.lower() == "y":
    print("Wait a moment...")
    with open(extraction_location, 'w', encoding="utf-8") as file:
        file.write("")

    with open(extraction_location, "a", encoding=_encoding) as file:
        file.write("{\n")

    for i in content[:-1]:
        add(i)
    add(content[-1], True)

    with open(extraction_location, "a", encoding=_encoding) as file:
        file.write("\n}")
