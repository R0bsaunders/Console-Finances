# Console-Finances

## Description
This is a demonstration of using newly learnt JavaScript to sort through financial data using minimum code as possible.

The criteria is:

write JavaScript code that analyzes the records to calculate each of the following:

* The total number of months included in the dataset.

* The net total amount of Profit/Losses over the entire period.

* The average of the **changes** in Profit/Losses over the entire period.
  * You will need to track what the total change in profits are from month to month and then find the average.
  * (`Total/Number of months`)

* The greatest increase in profits (date and amount) over the entire period.

* The greatest decrease in profit (date and amount) over the entire period. (note that this point was written incorrectly and has been corrected by our teacher)

When you open your code in the browser your resulting analysis should look similar to the following:

  ```text
  Financial Analysis
  ----------------------------
  Total Months: 25
  Total: $2561231
  Average  Change: $-2315.12
  Greatest Increase in Profits: Feb-2012 ($1926159)
  Greatest Decrease in Profits: Sep-2013 ($-2196167)
  ```

Your final code should print the analysis to the console.-+

## Usage

I have separated out the data from the index.js file. Data is found in the ![data.js](/data.js) file. 

All Javascript can be found in the ![index.js](/index.js) file. I have aggregated all sums into one 'for' loop and worked out the average change in profits outside of the loop following best practice. 

Open the ![index.html](/index.html) file
Open the console to view the result of the code

This is a screenshot of the result:

![screenshot-console](/images/console-screenshot.jpg)

Git Repo: https://github.com/R0bsaunders/Console-Finances

Live version: https://r0bsaunders.github.io/Console-Finances/