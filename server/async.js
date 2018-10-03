// const fetchAlbumbs = require('fetchAlbumbs');

const fetchAlbums = async() => {
    let res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    let json = await res.json();
    console.log(json);
}


const palinodrome = (str) => str === reverseStr(str);

const reverseStr = (str) => {
    let reversedWord = '';
    for (let i = str.length - 1; i > 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;
};

reverseStr(str)
