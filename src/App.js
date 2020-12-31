import { useState, useRef } from "react";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

import "./styles/app.scss";
import data from "./data";

function App() {
	// States
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);

	// Refs
	const audioRef = useRef(null);

	// Functions/Events
	const timeUpdateHandler = e => {
		const current = e.target.currentTime;
		const duration = e.target.duration;

		setSongInfo({
			...songInfo,
			currentTime: current,
			duration: duration,
		});
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex(song => song.id === currentSong.id);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		if (isPlaying) audioRef.current.play();
	};

	const activeLibraryHandler = nextPrev => {
		const newSongs = songs.map(song => {
			if (song.id === nextPrev.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);
	};

	return (
		<div className="App">
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<main className={`${libraryStatus ? "squeezed" : ""}`}>
				<Song currentSong={currentSong} />
				<Player
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					currentSong={currentSong}
					audioRef={audioRef}
					setSongInfo={setSongInfo}
					songInfo={songInfo}
					songs={songs}
					setCurrentSong={setCurrentSong}
					setSongs={setSongs}
					activeLibraryHandler={activeLibraryHandler}
				/>
				<Library
					audioRef={audioRef}
					songs={songs}
					setCurrentSong={setCurrentSong}
					isPlaying={isPlaying}
					setSongs={setSongs}
					libraryStatus={libraryStatus}
				/>
				<audio
					onLoadedMetadata={timeUpdateHandler}
					onTimeUpdate={timeUpdateHandler}
					ref={audioRef}
					src={currentSong.audio}
					onEnded={songEndHandler}></audio>
			</main>
		</div>
	);
}

export default App;
