// Unit 4: Console Finances

// Workout the total combined profit by looping each array and adding each value of finances[i][1] to the currently stored value of a variable
// Total months equals the length of the array
// Average change in profit is the combined difference in profit each month divided by the number of months (minus one - because the last value has no calculation needed)
// Largest increase in profit is worked out by:
    // Start loop on the 1st line of the inner array and deduct the previous line's figure from the current line.
    // Store value in a variable
    // If the value is greater than the value currently stored inside maxProfit, then maxProfit becomes the value - this way maxProfit will always be the highest figure it came across regardless of where in the loop
//Largest decrease in profits is worked in exactly the same way, only updated the minProfit with the largest decrease
    // Start loop on the 1st line of the inner array and deduct the previous line's figure from the current line.
    // Store value in a variable
    // If the value is less than the value currently stored inside minProfit, then minProfit becomes the value - this way minProfit will always be the highest negative figure it came across regardless of where in the loop
// To store the highest increase and decrease month, only update the figure with the finances[i][0] value if the criteria is met above.

    
    var totalProfit = 0;
    var maxProfit = 0;
    var minProfit = 0;
    var averageProfitLoss = 0;
    var totalProfitLoss = 0;
    
for (var i = 0; i < finances.length; i++) {

    totalProfit += finances[i][1];

    if (i > 0) {

        profitDelta = (finances[i][1] - finances[i-1][1]);

        totalProfitLoss += profitDelta;

        if (profitDelta > maxProfit) {

            maxProfit = profitDelta;
            maxProfitMonth = finances[i][0];

        } else if (profitDelta < minProfit) {

            minProfit = profitDelta;
            minProfitMonth = finances[i][0];
        };

    };

};

averageProfitLoss = (totalProfitLoss / (finances.length -1));

console.log(
    "Financial Analysis\n--------------------------\n" +
    `Total Months: ${finances.length}\n` +
    `Total: $${totalProfit}\n` +
    `Average Change: $${averageProfitLoss.toFixed(2)}\n` +
    `Greatest Increase in Profits: ${maxProfitMonth} ($${maxProfit})\n` +
    `Greatest Decrease in Profits: ${minProfitMonth} ($${minProfit})\n` +
    `--------------------------`
);
    
