/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

 function orderByYear (arr) {
   let newArr = [...arr];
   return newArr.sort((a,b) => (a.year > b.year) ? 1 : -1 ); 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
// function howManyMovies(arr) {
 //  return arr.filter(movies => )
    
// }
  

  

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

//function orderAlph(arr){
//    let titleArr= [..arr];
 //   let finalArr=[];
 //   titleArr.sort((a,b) => a.title)
// }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    let averageRate=0;
    let newArr = arr.filter(obj => Object.keys(obj).includes('rate'))
    if (arr.length===0) return averageRate;
    newArr.forEach(movies => averageRate += movies.rate);
    return Math.round(100 * averageRate/ arr.length)/ 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
