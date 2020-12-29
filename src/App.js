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
		animationPercentage: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);

	// Refs
	const audioRef = useRef(null);

	// Functions/Events
	const timeUpdateHandler = e => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		// Calculate Percentage
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100);
		setSongInfo({
			...songInfo,
			currentTime: current,
			duration: duration,
			animationPercentage: animationPercentage,
		});
	};

	return (
		<div className="App">
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
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
				src={currentSong.audio}></audio>
		</div>
	);
}

export default App;
