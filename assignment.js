//Assignment 03
//--------***---------

// Kilometer To Meter Convertion ---

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    else
        return "Invalid Submission!!";
    
}
//console.log(kilometerToMeter());

// ----------------------------------------- ***** --------------------------------------------


// Budget Calculator --

const clockPrice = 50,
    mobilePrice = 100,
    laptopPrice = 500;
var clockCost, mobileCost, laptopCost, totalCost;

function budgetCalculator(clockAmount, mobileAmount, laptopAmount) {
    if ((typeof clockAmount == "number" && clockAmount >= 0) &&
        (typeof mobileAmount == "number" && mobileAmount >= 0) &&
        (typeof laptopAmount == "number" && laptopAmount >= 0)) {
        
        clockCost = (clockPrice * clockAmount);
        mobileCost = (mobilePrice * mobileAmount);
        laptopCost = (laptopPrice * laptopAmount);

        totalCost = (clockCost + mobileCost + laptopCost);

        return totalCost;
    }
    else
        return "Invalid Submission!!";
}
//console.log(budgetCalculator());

// ----------------------------------------- ***** --------------------------------------------


// Hotel-Rent Calculation --- 

const rent = 100,
    discountFirst = 80,
    discountSecond = 50;

function hotelCost(personStayed) {
    var regularPrice = 10 * rent;
    var secondDiscountCost = 10 * discountFirst;
    var extendedDays;
    if (typeof personStayed == 'number' && personStayed >= 0) {
        if (personStayed <= 10 && personStayed >= 1) {
            var residenceCost = personStayed * rent;
            return residenceCost;
        }
        if (personStayed <= 20) {
            extendedDays = (personStayed - 10);
            let residenceCost = regularPrice + (extendedDays * discountFirst);
            return residenceCost;
        } else {
            extendedDays = (personStayed - 20);
            let residenceCost = regularPrice + secondDiscountCost + (extendedDays * discountSecond);
            return residenceCost;
        }
    } else
        return "Invalid Submission!!";

}
// console.log(hotelCost());

// ----------------------------------------- ***** --------------------------------------------


//Friend Finder ---

let hugeName, availableName;

function megaFriend(biggestFriend) {
    if (Array.isArray(biggestFriend) && biggestFriend.length > 0) {
        hugeName = biggestFriend[0];
        for (let i = 1; i < biggestFriend.length; i++) {
            if (typeof biggestFriend[i] == 'string') {
                availableName = biggestFriend[i];
                if (hugeName.length < availableName.length)
                    hugeName = availableName;
            } else
                return 'Please provide an array with only string';
        }
        return hugeName;
    } else
        return 'Please provide an array with miminum one value';
}

//console.log(megaFriend([]));