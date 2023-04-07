//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow{
    constructor(release, genre, length, reviews){
    this.release = release
    this.genre = genre
    this.length = length
    this.reviews = reviews

   watch(){
        alert(`I am watching, I heard the movie is ${length} long`)
    }
    reviewer(){
        alert(`I give this ${reviews} rotten tomatoes`)
    }
}
}
