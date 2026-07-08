const movies = [
    {title:"Shutter Island", rating:9, isWatched:true},
    {title:"Obsession", rating:8, isWatched: true},
    {title:"Toy Story", rating:7.5, isWatched: false}]

function showWatchedMovies() {
    for(let i = 0; i < movies.length; i++){
        if(movies[i].isWatched == true){
            console.log(`You watched ${movies[i].title} and rated it ${movies[i].rating}`);
          
        }
        else{
           console.log(`You did not watch the ${movies[i].title} yet.`)
        }
    }


}

showWatchedMovies();