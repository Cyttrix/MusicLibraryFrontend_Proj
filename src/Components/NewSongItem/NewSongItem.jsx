import React, {useState} from 'react';

const NewSongItem = ({onNewSong}) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title,
            artist, 
            album,
            releaseDate,
            genre,
        }
        onNewSong(postData);
    }
    
    return ( 
       <form onSubmit={handleSubmit}>
        <h4>
            Add New Song
        </h4>
        <div>
            <label>Title</label>
            <textarea value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Artist</label>
            <textarea value={artist} onChange={(e) => setArtist(e.target.value)}/>
        </div>
        <div>
            <label>Album</label>
            <textarea value={album} onChange={(e) => setAlbum(e.target.value)}/>
        </div>
        <div>
            <label>Release Date</label>
            <textarea value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)}/>
        </div>
        <div>
            <label>Genre</label>
            <textarea value={genre} onChange={(e) => setGenre(e.target.value)}/>
        </div>
        <button type="submit">Add Song</button>
        
       </form>


        
     );
}
 
export default NewSongItem;