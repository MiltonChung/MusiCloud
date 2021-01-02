import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
	return (
		<div className={`library ${libraryStatus ? "active-library" : ""}`}>
			{/* <h2>Library</h2> */}
			<div className="library-songs">
				{songs.map(song => {
					return (
						<LibrarySong
							setCurrentSong={setCurrentSong}
							setSongs={setSongs}
							song={song}
							songs={songs}
							id={song.id}
							key={song.id}
							audioRef={audioRef}
							isPlaying={isPlaying}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Library;
