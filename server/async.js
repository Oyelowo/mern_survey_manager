// const fetchAlbumbs = require('fetchAlbumbs');

const fetchAlbums = async() => {
    let res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    let json = await res.json();
    console.log(json);
}

// function fetchAlbums  () {
// fetch('https://rallycoding.herokuapp.com/api/music_albums')     .then(res=>
// res.json())     .then(json=> console.log(json)); }

console.log(fetchAlbums());

const palinodrome = (str) => str === reverseStr(str);

const reverseStr = (str) => {
    let reversedWord = '';
    for (let i = str.length - 1; i > 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;
};

reverseStr(str)
