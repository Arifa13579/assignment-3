 
 
 // code number : 1
 function kilometerToMeter(kilometer){
      if(kilometer > 0){
        var meter = kilometer * 1000; // 1 kilometer = 1000 meter
        return meter;
     }else{
         return "Invalid Input";
     }
 }

var meter = kilometerToMeter(5);
console.log(meter);
    

//code number : 2

function budgetCalculator(watch,phone,laptop){
    //Validition for negative value
    if(watch >= 0 && phone >= 0 && laptop >= 0){
        var watchPrice = watch * 50; // total cost of watch 
        var phonePrice = phone * 100; //total cost of phone
        var laptopPrice = laptop * 500; //total cost of laptop
        total = watchPrice + phonePrice + laptopPrice; //total cost of all items
        return total;
    }else{
        return "Invalid Input";
    } 
}
var totalBudget = budgetCalculator(10,10,10);
console.log(totalBudget);


//code number : 3

function hotelCost(days){
    //Validation for negative value
    if(days > 0){
        var cost = 0;
        if(days <= 10){
            cost = days * 100; //cost for first 10 days
        }else if(days <= 20){
            var firstPart = 10 * 100; //cost for first 10 days
            var remaining = days - 10;
            secondPart = remaining * 80; //cost for second 10 days
            cost = firstPart + secondPart; //total cost 
        }else{
            var firstPart = 10 * 100; //cost for first 10 days
            var secondPart = 10 * 80; //cost for second 10 days
            var remaining = days - 20; 
            var thirdPart = remaining * 50; //cost for more than 20 days
            cost = firstPart + secondPart + thirdPart; //total cost
        }
        return cost;
    }else{
        return "Invalid Input";
    }
}

var totalPrice = hotelCost(26);
console.log(totalPrice);


//code number : 4
    
function megaFriend(naam){
    var naam1 = naam[0];
    for( var i = 0; i < naam.length; i++){ 
        //searching the longest name
        if(naam[i].length > naam1.length){
            naam1 = naam[i];
        }
    }
    
    return naam1;
}

var longestName = megaFriend(['rahim', 'karim', 'jobbar', "arifa yasmin" ,'salam', 'sultana']);
console.log(longestName);