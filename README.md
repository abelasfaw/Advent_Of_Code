

# Advent of Code Challenge Solutions

This repository contains solutions for the Advent of Code programming challenges, organized by year. Each year has its own folder (e.g., `2015/`), containing solutions for that year's daily puzzles.

## Structure
- Each year (e.g., `2015/`, `2016/`, etc.) has a dedicated folder.
- Inside each year folder, each challenge solution is implemented as a standalone script (e.g., `Secret_Entrance.js`).
- Input data for each challenge is stored in a corresponding `input.txt` file in the same directory as the script.

## How to Use
1. Navigate to the folder for the desired year (e.g., `2015/`).
2. Find the script for the specific day/challenge you want to run.
3. Ensure the required `input.txt` file is present in the same directory as the script.
4. Run the script using Node.js:
   ```sh
   node <script_name.js>
   ```
   Replace `<script_name.js>` with the actual file name.
5. The script will output the solution for that day's challenge.

## Conventions
- Each solution is self-contained and may have its own input parsing logic.
- Scripts are named to reflect the challenge or puzzle they solve.
- Inputs and outputs are not standardized across all years or days; check each script for specifics.

## Adding New Solutions
- Add new scripts and their `input.txt` files to the appropriate year folder.
- Follow the self-contained script pattern for each solution.

## Example
- The `2015/Secret_Entrance.js` script solves one of the 2015 challenges using instructions from `2015/input.txt`.
