import os 
import pandas as pd
import json
import sys

def make_language_directory(lang):
  path = f'./{lang}'
  mode = 0o777
  if not os.path.exists(path):
    os.mkdir(path, mode)

languages = ["en", "fi"]

# TODO: add functionality for autodetecting languages
if __name__ == "__main__":
  if len(sys.argv) < 2:
    print("Usage:", sys.argv[0], "<excel file to convert>")
    exit(1)
  excel_file_path = sys.argv[1]
  excel_file = pd.ExcelFile(excel_file_path)
  make_language_directory("locales")
  for lang in languages:
    make_language_directory('locales/' + lang)

  for sheet_name in excel_file.sheet_names:
    # Read the sheet into a DataFrame
    data_frame = pd.read_excel(
      excel_file_path,
      sheet_name=sheet_name,
      usecols=["KEY"] + languages
    )

    for lng in languages:
      obj_lng = {}
      rows = data_frame.apply(
        lambda row: {"key": row["KEY"], lng: row[lng]},
        axis=1
      )
      for row in rows:
        key = row["key"]
        val = row[lng]

        if pd.isna(key):
          continue
        if pd.isna(val):
          val = key + " missing"

        obj_lng[key] = val
    
      file_name = f"./locales/{lng}/{sheet_name}.json"

      with open(file_name, 'w', encoding='utf-8') as namespace_file:
        json.dump(obj_lng, namespace_file, indent=4, ensure_ascii=False)