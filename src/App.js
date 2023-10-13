import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NewSongItem from "./Components/NewSongItem/NewSongItem";

function App() {
  const [songs, setSongs] = useState([]);

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
    <div className="App">
      {/* Header */}
      {/*  */}
      <NewSongItem onNewSong={handleNewSong} />
    </div>
  );
}

export default App;
