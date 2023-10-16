import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NewSongItem from "./Components/NewSongItem/NewSongItem";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7142/api/Songs");
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchSongs request: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleNewSong = (newSong) => {
    const updatedSongs = [...songs, newSong];
    setSongs(updatedSongs);
  };

  return (
    <div>
      <Header />
      <div className="verticalalignmiddle">
        <SearchBar
          songs={songs}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <MusicTable songs={songs} searchInput={searchInput} />
        <NewSongItem onNewSong={handleNewSong} />
      </div>
    </div>
  );
}

export default App;
