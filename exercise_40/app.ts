
function make_album(artistname:string,albumtitle:string,tracks?:number):{artistname:string,albumtitle:string,tracks?:number}{
    return{
        artistname,
        albumtitle,
        tracks,
    }
}
console.log(make_album("artist1","album1",));
console.log(make_album("artist1","album1",12));
console.log(make_album("artist1","album1",));