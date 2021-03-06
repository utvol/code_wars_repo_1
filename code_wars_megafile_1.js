// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

// Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
// Test.assertEquals(tickets([25, 100]), "NO");
//


function tickets(peopleInLine) {

    var total = 0

    peopleInLine.forEach(function(element) {
        total += element;


    })

    peopleInLine.forEach(function(element) {
        total -= element;

        if (total < 0) {
            return "NO";
        }
    })

    var fans = peopleInLine.length;
    return total;
}


function isTriangle(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true
    } else {
        return false
    }
}

//
// var isSquare = function(n){
//
//   if (Math.sqrt(n) == n) {
//     return true
//   } else {
//     return false
//   }
// }

function GetSum(a, b) {
    let sum = 0;
    if (a == b) {
        return a
    } else if (a > b) {
        for (var i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        for (var i = a; i <= b; i++) {
            sum += i;
        }
    }
    return sum
}





//
