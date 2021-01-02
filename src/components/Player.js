import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faVolumeDown,
	faVolumeUp,
	faPause,
	faStepForward,
	faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
	songInfo,
	setSongInfo,
	audioRef,
	currentSong,
	isPlaying,
	setIsPlaying,
	songs,
	setCurrentSong,
	activeLibraryHandler,
	volume,
	setVolume,
}) => {
	const playSongHandler = () => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
		setIsPlaying(!isPlaying);
	};

	const getTime = time => {
		return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
	};

	const dragHandler = e => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({
			...songInfo,
			currentTime: e.target.value,
		});
	};

	const skipTrackHandler = async direction => {
		let currentIndex = songs.findIndex(song => song.id === currentSong.id);
		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		}
		if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryHandler(songs[songs.length - 1]);
				if (isPlaying) audioRef.current.play();
				return;
			}
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
		}
		if (isPlaying) audioRef.current.play();
	};
	// Calculate Percentage
	const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;
	// Add the styles
	const trackAnim = {
		transform: `translateX(${animationPercentage}%)`,
	};

	const volumeHandler = e => {
		setVolume(e.target.value);
		audioRef.current.volume = volume / 100;
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<div
					style={{
						background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
					}}
					className="track">
					<input
						min={0}
						max={songInfo.duration || 0.0}
						value={songInfo.currentTime}
						onChange={dragHandler}
						type="range"
					/>
					<div style={trackAnim} className="animate-track"></div>
				</div>
				<p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
			</div>
			<div className="play-control">
				<div className="playerControl">
					<FontAwesomeIcon
						onClick={() => skipTrackHandler("skip-back")}
						className="skip-back"
						size="2x"
						icon={faStepBackward}
						title="To previous song"
					/>
					<FontAwesomeIcon
						onClick={playSongHandler}
						className="play"
						size="2x"
						icon={isPlaying ? faPause : faPlay}
						title="Play"
					/>
					<FontAwesomeIcon
						onClick={() => skipTrackHandler("skip-forward")}
						className="skip-forward"
						size="2x"
						icon={faStepForward}
						title="Skip to next song"
					/>
				</div>
				{/* https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser */}
				<div
					className={`volumeControl ${
						/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
							? "hideMobile"
							: ""
					}`}>
					<FontAwesomeIcon icon={faVolumeDown} title="Volume Down" />
					<div className="volume">
						<input
							type="range"
							min="0"
							max="100"
							value={volume}
							className="slider"
							onChange={volumeHandler}
						/>
					</div>
					<FontAwesomeIcon icon={faVolumeUp} title="Volume Up" />
				</div>
			</div>
		</div>
	);
};

export default Player;
