function make_album(artistname, albumtitle, tracks) {
    return {
        artistname: artistname,
        albumtitle: albumtitle,
        tracks: tracks,
    };
}
console.log(make_album("artist1", "album1"));
console.log(make_album("artist1", "album1", 12));
console.log(make_album("artist1", "album1"));
