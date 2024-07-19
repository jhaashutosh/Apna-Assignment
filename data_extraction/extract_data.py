import pandas as pd
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
excel_file_path = os.path.join(base_dir, '../assignment_data.xlsx')
output_json_path = os.path.join(base_dir, '../backend/data/extracted_data.json')

# Load the Excel file
excel_data = pd.read_excel(excel_file_path)

# Convert the DataFrame to JSON
data_json = excel_data.to_json(orient='records')

# Save the JSON data to a file
with open(output_json_path, 'w') as file:
    file.write(data_json)

print("Data extracted and saved to JSON file.")