// Question no: 01
function describeValue(value)
{
    let valueType = typeof(value);
    let booleanType;
    if(value) booleanType = "truthy";
    else booleanType = "falsy";
    return `${valueType} | ${booleanType}`;
}

// Question no: 02
function getDayType(inputDay)
{
    let day = inputDay.toLowerCase();

    if(day === "friday" || day === "saturday")
    {
        return "Weekend";
    }
    else if(day === "sunday" || day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday")
    {
        return "Working Day";
    }
    else return "Invalid Day";
}

// Question no: 03
function validateUsername(name)
{
    let uName = name.toLowerCase();
    if(uName.length < 4) return "Too Short";
    else if(uName.includes(" ")) return "No Space Allowed";
    else if(uName.includes("admin")) return "Reserved Word";
    else return "Available";
}

// Question no: 04
function getCngFare(distance, isNight = false, waitingMinutes = 0)
{
    let finalFare = 50;
    if(distance > 2)
    {
        let x = distance - 2;
        finalFare += x*15;
    }
    if(waitingMinutes != 0)
    {
        finalFare += 2*waitingMinutes;
    }
    if(isNight === true)
    {
        let extra = finalFare * (20/100);
        finalFare += extra;
    }
    return finalFare;
}

// Question no: 05
const getChaseVerdict = (target, scored, ballsLeft) => { 
    let runsNeeded = target - scored;
    if(runsNeeded <= 0) return "Won";
    else if(ballsLeft <=0) return "Lost";
    else
    {
        let requiredRate = (runsNeeded / ballsLeft) * 6;
        let verdict;
        if(requiredRate <= 6) verdict = "Comfortable";
        else if(requiredRate > 6 && requiredRate <= 12) verdict = "Tough";
        else verdict = "Almost Impossible";

        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    }

};

