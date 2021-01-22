
          // Kilometer To Meter
function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter;
}

var meter=kilometerToMeter(150);
console.log(meter);

       //Budget calculator

 function budgetCalculator(watch,phone,laptop){
    var watchPrice=watch*50;
    var phonePrice=phone*100;
    var laptopPrice=laptop*500;
    var totalCost= watchPrice+ phonePrice+ laptopPrice;
    return totalCost;
}
var totalCost=budgetCalculator(10,5,3);
console.log(totalCost);


   //Hotel Cost

function hotelCost(days){
    var cost=0;
     if(days<=10){
         cost=days*100;
     }
     else if(days<=20){
         var firstTenDays=10*100;
         var extraDays=days-10;
         var secondTenDays=extraDays*80;
         cost=firstTenDays+secondTenDays;
     }
     else{
         var firstTenDays=10*100;
         var secondTenDays=10*80;
         var extraDays=days-20;
         var overTwentyDays=extraDays*50;
      cost=firstTenDays+secondTenDays+overTwentyDays;
         
     }
     return cost;
}
var cost=hotelCost(23);
console.log(cost);


   //Mega Friend
   var names=['Farzana','Tasfa','Farintaa','Fariha','Ariyan','Arafat'];
   function megaFriend(names){
     var largestFriend=[0];
     for(var i=0; i<names.length; i++){
     
     if(names[i].length>largestFriend.length){
            largestFriend=names[i];
        } 
    }
    return largestFriend;
}

var largestFriend=megaFriend(names);
console.log(largestFriend);
