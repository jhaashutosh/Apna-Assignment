# Apna Assignment

This project consists of a frontend built with React and a backend built with Node.js. The backend requires data extraction from an Excel file using a Python script.

## Project Structure

```.
├── Readme.md
├── assignment_data.xlsx
├── backend
│   ├── data
│   │   └── extracted_data.json
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── data_extraction
│   ├── extract_data.py
│   └── requirements.txt
├── directory_tree.txt
├── frontend
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── components
│   │   │   ├── FeaturedComponent.js
│   │   │   └── Header.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── pages
│   │   │   └── index.js
│   │   └── styles
│   │       ├── featuredComponent.css
│   │       └── globals.css
│   └── tailwind.config.js
└── tailwind.config.js
```

10 directories, 26 files


## Prerequisites

- Node.js and npm
- Python 3.x
- pandas library for Python (`pip install pandas`)

## Setup Instructions

### Step 1: Run the Python Script to Extract Data

1. Navigate to the `data_extraction` directory:

    ```bash
    cd apna-assignment/data_extraction
    ```

2. Run the Python script to extract data from the Excel file and generate a JSON file:

    ```bash
    python extract_data.py
    ```

    This will read the `assignment_data.xlsx` file and generate `extracted_data.json` in the `backend/data` directory.

### Step 2: Setup and Run the Backend Server

1. Navigate to the `backend` directory:

    ```bash
    cd ../backend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

### Step 3: Setup and Run the Frontend Application

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the frontend application:

    ```bash
    npm start
    ```

## Summary

1. Run the Python script to extract data: `python extract_data.py`
2. Setup and start the backend server: `npm install` and `npm start` in the `backend` directory.
3. Setup and start the frontend application: `npm install` and `npm start` in the `frontend` directory.