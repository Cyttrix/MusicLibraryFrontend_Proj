const MusicTable = ({songs = [], searchInput }) => {
    
    const searchFilter = songs.filter((song) => {
            return (
                song.title.match(searchInput) ||
                song.artist.match(searchInput) ||
                song.album.match(searchInput) ||
                song.releaseDate.match(searchInput) ||
                song.genre.match(searchInput)
            )
        });
    
        console.log(searchFilter);
    const songItem = searchFilter.map((song, index) => <tr key={index}><td>{song.title}</td><td>{song.artist}</td>
    <td>{song.album}</td><td>{song.releaseDate}</td><td>{song.genre}</td><td><button>Edit</button><button>Delete</button></td></tr>)

    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            {songItem}
        </table>
    )
    
}

export default MusicTable