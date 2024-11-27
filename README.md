# JavaScript Assignment Solution

This repository contains the solution to a JavaScript assignment. The task involves processing multiple text files, extracting content, and appending it into a single output file. Below is an overview of the solution.

## Authors
- **Elad Silam (208112185)**
- **Shai Salem (314784372)**

---

## Problem Overview

The objective of the assignment is to:
- Read multiple text files from a specified directory (`DummyTextFiles`).
- Extract content from each file and append it line by line up to the index File to an output file (`output.txt`).
- Ensure that the lines from each file are written in a specific order, and each file's content is separated by blank lines in the output file.

---

## Solution Approach

The solution is written in JavaScript using Node.js and leverages the `fs` (file system) and `path` modules to handle file operations.

### Key Steps:

1. **File List**: The array `arrOfFileNames` contains the names of the files to be processed (`Dummy(1).txt`, `Dummy(2).txt`, etc.).
   
2. **Looping through Files**: 
   - For each file, the program reads its content using `fs.readFileSync()` and splits it into lines using `.split('\n')`.
   - The program then appends each line (up to the current file index) into the output file.

3. **Output File Construction**: 
   - The content from each file is appended line by line to `output.txt`.
   - After each file’s content, three newlines (`\n\n\n`) are added to separate the contents from different files.

### Code Description

- **Modules**: The code uses `fs` for file operations (reading and writing) and `path` to manage file paths.
- **Variables**: 
  - `dummy_dir_name`: Directory containing the text files.
  - `nameOfOutputFile`: Name of the output file (`output.txt`).
  - `pathToDummyFiles`: Path to the directory containing input files.
  - `pathToOutputTxt`: Path where the output file will be saved.

---

## Example Usage

1. Clone the repository.
2. Place the text files (`Dummy(1).txt`, `Dummy(2).txt`, etc.) in the `DummyTextFiles` directory.
3. Run the script using Node.js:

   ```bash
   node script.js
