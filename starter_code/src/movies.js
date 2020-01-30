/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

 function orderByYear (arr) {
   let newArr = [...arr];
   return newArr.sort((a,b) => (a.year > b.year) ? 1 : -1 ); 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
 function howManyMovies(arr) {
   return arr.filter(movies => {
 return movies.genre.includes('Drama') && movies.director === "Steven Spielberg";
    
   }).length;
  

  

 //Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(arr){
     let titleArr = [...arr];
     let finalArr = [];
    titleArr.sort((a,b) => a.title > b.title ? 1 : -1);
     let twentyArr = titleArr.slice(0, 20);
     twentyArr.forEach(element => {
         finalArr.push(element.title);
    });
    return finalArr;
    return [...arr].sort((a,b) => a.title > b.title ? 1 : -1).slice(0,20).map(movie => movie.title);
}

 //Iteration 4: All rates average - Get the average of all rates with 2 decimals
 function ratesAverage(arr) {
       let ratesArr = [];
       if(!arr.length) return 0;
       arr.forEach(element => {
           if(!element.rate || element.rate == '') ratesArr.push(0);
           else ratesArr.push(element.rate);
       });
       return Number((ratesArr.reduce((acc, cur) => acc+cur, 0)/arr.length).toFixed(2));
   }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

  
  function dramaMoviesRate(arr) {
         let dramas = arr.filter(i => i.genre.includes('Drama'));
         let count = 0;
         if(dramas.length === 0) return 0;
         let rates = dramas.forEach(i => i.rate ? count+=i.rate : count+= 0);
       return Number((count/dramas.length).toFixed(2));
  }

function dramaMoviesRate(arr) {

     let dramas = arr.filter(movie => movie.genre.includes('Drama')).length;
     //false null 0 [] {} '' 
     if(dramas === 0) return 0;
     let dramaRates = arr.reduce((acc, movie) => { 
         if(movie.genre.includes('Drama')) {
             acc += movie.rate;
         } 
         return acc;
     }, 0);
     return Number((dramaRates/dramas).toFixed(2))
 }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrOfMovies) {
  let newArr = arrOfMovies.map(movie => { 
      let copyMovie = {...movie};
      let timeArr = movie.duration.split(' ');
      if(timeArr.length === 2) {
          copyMovie.duration = parseInt(timeArr[0])
          * 60 + parseInt(timeArr[1]);
      } 
      else if(timeArr.length === 1 && timeArr[0].includes('h')) {
          copyMovie.duration = parseInt(timeArr[0]) * 60;
      }
      else if(timeArr[0].includes('min')) {
          copyMovie.duration = parseInt(timeArr[0]);
      }
      return copyMovie;
  });
  return newArr;
}



// BONUS Iteration: Best yearly rate average - Best yearly rate averages   
function bestYearAvg(arrOfMovies) {
  let averageByYear = arrOfMovies.reduce((averages, movie) => {
      if(averages[movie.year]) {
          averages[movie.year].rates += movie.rate;
          averages[movie.year].count++;
      } else {
          averages[movie.year] = {};
          averages[movie.year].rates = movie.rate;
          averages[movie.year].count = 1;
      }
      return averages;
  }, {});
  arrOfMovies.sort((a,b) => {
      if( averageByYear[a.year].rates/averageByYear[a.year].count === averageByYear[b.year].rates/averageByYear[b.year].count) {
          return a.year - b.year;
      }
      return averageByYear[a.year].rates/averageByYear[a.year].count - averageByYear[b.year].rates/averageByYear[b.year].count;
  })
  return `The best year was ${arrOfMovies[0].year} with an average rate of ${averageByYear[arrOfMovies[0].year].rates}`
}