import Wave from "@foobar404/wave";
import { useState, useRef, useEffect } from "react";

const Song = ({ currentSong, isPlaying }) => {
	let [wave] = useState(new Wave());
	const [canvasVisibility, setcanvasVisibility] = useState(true);
	const options = { type: "bars" };
	wave.fromElement("audioID", "visualizer", options);

	const canvasEl = useRef(null);
	useEffect(() => {
		function handleResize() {
			if (isPlaying) {
				fixDPI(canvasEl);
			}
		}
		window.addEventListener("resize", handleResize);
	});

	const canvasHandler = () => {
		console.log("click");
		if (canvasVisibility) {
			canvasEl.current.style.opacity = 0;
			setcanvasVisibility(!canvasVisibility);
		} else {
			canvasEl.current.style.opacity = 1;
			setcanvasVisibility(!canvasVisibility);
		}
	};

	return (
		<div className="song-container">
			<div className="songInfo">
				<h2>{currentSong.name}</h2>
				<h3>{currentSong.artist}</h3>
				<canvas
					id="visualizer"
					ref={canvasEl}
					onClick={canvasHandler}
					title={`Click to turn ${canvasVisibility ? "off" : "on"} visualizer`}></canvas>
				<small>{`Click above to turn ${canvasVisibility ? "off" : "on"} visualizer`}</small>
			</div>
			<img alt={currentSong.name} src={currentSong.cover}></img>
		</div>
	);
};

function fixDPI(canvasEl) {
	// let dpi = window.devicePixelRatio;

	let style_height = +getComputedStyle(canvasEl.current).getPropertyValue("height").slice(0, -2);
	// //get CSS width
	let style_width = +getComputedStyle(canvasEl.current).getPropertyValue("width").slice(0, -2);
	// //scale the canvas
	canvasEl.current.setAttribute("height", style_height);
	canvasEl.current.setAttribute("width", style_width);
}

export default Song;
