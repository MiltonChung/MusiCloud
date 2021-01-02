const Song = ({ currentSong }) => {
	return (
		<div className="song-container">
			<div className="songInfo">
				<h2>{currentSong.name}</h2>
				<h3>{currentSong.artist}</h3>
			</div>
			<img alt={currentSong.name} src={currentSong.cover}></img>
		</div>
	);
};

export default Song;
