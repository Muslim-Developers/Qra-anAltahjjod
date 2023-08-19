def add_to_file (file_name="../quran.json", text=""):
    with open(file_name, 'a', encoding="utf-8") as file:
        file.write(text)

def getSurah(surah_number, last_one):
    file_path = f"../../templates/{surah_number}.html"
    encoding = 'utf-8'

    name = ""
    content = []

    with open(file_path, 'r', encoding=encoding) as html_file:
        lines = list(map(lambda a: str(a.strip()) + " ", html_file.readlines()))

    check_for_name = True
    take_ayah = False
    id = ""
    title = ""
    ayat = ""
    for line in range(0, len(lines)):
        if check_for_name:
            # Get surah name
            name_at = "view-title="
            fint_at = lines[line].find(name_at)
            start = fint_at + len(name_at) + 1
            if fint_at > -1:
                while lines[line][start] != '\"':
                    name += lines[line][start]
                    start+=1
            check_for_name = False

        if line == 0: continue
        id_at = "id="
        id_place = lines[line].find(id_at)
        # found ID
        if id_place > -1:
            start = id_place + len(id_at) + 1
            while lines[line][start] and lines[line][start] != '\"':
                if lines[line][start] == "#": start+=1; continue
                id += lines[line][start]
                start+=1

        title_at = "ng-click="
        title_place = lines[line].find(title_at)
        # found Title
        if title_place > -1:
            start = title_place + len(title_at) + 1
            while lines[line][start] and lines[line][start] != '\"':
                title += lines[line][start]
                start+=1
        
        if lines[line-1].endswith(")\"> "): take_ayah = True
        if lines[line] and take_ayah: ayat += lines[line].replace("</b>", "")
        if lines[line] and lines[line][0] == '<':
            if take_ayah:
                content.append({"id": id, "title": title.replace("s()", "").replace("()", ""), "ayat": ayat})
                id = ""
                title = ""
                ayat = ""
            take_ayah = False

    add_to_file(text="\n\t")
    add_to_file(text='"' + str(surah_number) + '"' + ": {\n\t\t")
    add_to_file(text=f"\"name\": \"{name}\",\n\t\t")
    add_to_file(text="\"content\": [\n")
    counter = 0
    for i in content:
        counter += 1
        add_to_file(text="\t\t\t{\n")
        add_to_file(text=f"\t\t\t\t\"id\": \"{i['id']}\",\n")
        add_to_file(text=f"\t\t\t\t\"title\": \"{i['title']}\",\n")
        add_to_file(text=f"\t\t\t\t\"ayat\": \"{i['ayat']}\"\n")
        if counter < len(content):
            add_to_file(text="\t\t\t},\n")
        else:
            add_to_file(text="\t\t\t}\n")
    if last_one:
        add_to_file(text="\t\t]\n\t}\n")
    else:
        add_to_file(text="\t\t]\n\t},\n")

y = input("Alert: The old .json file content will be removed\n Are you sure you want to continue ? (Y / N) ")

if y.lower() == "y":
    print("Wait a moment...")
    with open("../quran.json", 'w', encoding="utf-8") as file:
        file.write("")
    add_to_file(text='{')

    for k in range(1, 114):
        getSurah(k, False)

    getSurah(114, True)

    add_to_file(text='}')
