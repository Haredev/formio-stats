export const formioStatsCheckbox = function(formioSubmissions: any, checkBoxId: string) {
    var trueCount = 0;                    
    var falseCount = 0;
    for (var key in formioSubmissions) {           
        for (var sub_key in formioSubmissions[key].data) { 
            if (formioSubmissions[key].data[sub_key] === true && sub_key === checkBoxId) {
                trueCount++;
            }
            if (formioSubmissions[key].data[sub_key] === false && sub_key === checkBoxId) {
                falseCount++;
            }
        }
    }
    return {
        percentageOfTrue: (trueCount * 100) / (trueCount + falseCount),
        percentageOfFalse: (falseCount * 100) / (trueCount + falseCount)
    }
}