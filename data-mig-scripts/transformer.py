from bs4 import BeautifulSoup
import json
import re


def transformer(id):
    # read html code from file
    with open(f"templates/{id}.html", "r", encoding="utf-8") as file:
        html_code = file.read()

    # Parse the HTML code using BeautifulSoup
    soup = BeautifulSoup(html_code, "html.parser")

    # Extract 'view-title' attribute from 'ion-view' tag
    view_title = soup.find("ion-view")["view-title"]

    # Find all <b> tags
    b_tags = soup.find_all("b")

    # Initialize the JSON structure
    json_data = {"id": id, "name": view_title, "parts": []}

    parts_id = 0
    # Iterate through the <b> tags and extract data
    for b_tag in b_tags:
        plainText = b_tag.get_text(strip=True).replace("\n", "")
        cleanedText = re.sub(r"\s+", " ", plainText)
        numbers = re.findall(
            r"\u06F1|\u06F2|\u06F3|\u06F4|\u06F5|\u06F6|\u06F7|\u06F8|\u06F9|\d+",
            cleanedText,
        )
        print(id)
        print(numbers)
        parts_id += 1
        part = {
            "id": parts_id,
            "color": f'#{b_tag.get("id")}',
            "from-to": [int(numbers[0]), int(numbers[-1])],
            "location": f"s{id}from{numbers[0]}to{numbers[-1]}",
            "content": cleanedText,
        }
        json_data["parts"].append(part)

    # Specify the file path to save the JSON data
    file_path = f"./surasData/{id}.json"

    # Write the JSON data to the file
    with open(file_path, "w", encoding="utf-8") as json_file:
        json.dump(json_data, json_file, ensure_ascii=False, indent=2)


# with open("templates/1.html", "r", encoding="utf-8") as file:
#     html_content = file.read()


for i in range(1, 115):
    transformer(i)
    print(f"________ number {i} id done ________")
