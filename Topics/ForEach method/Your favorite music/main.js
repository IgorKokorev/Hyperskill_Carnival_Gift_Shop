const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
  // write your code
    music.forEach((music, index, array) => {
        console.log('My favorite music is ' + music + ' choosing from ' + array);
    })
}