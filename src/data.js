import { v4 as uuidv4 } from "uuid";
import WaitForYou from "./songs/WaitForYou.mp3";
import Starving from "./songs/Starving.mp3";
import fumes from "./songs/fumes.mp3";
import gold from "./songs/gold.mp3";
import Maniac from "./songs/Maniac.mp3";
import Ultralife from "./songs/Ultralife.mp3";
import BlueberryFaygo from "./songs/BlueberryFaygo.mp3";
import ThisIsMyVersion from "./songs/ThisIsMyVersion.mp3";

function musicList() {
	return [
		{
			name: "Wait For You",
			cover: "https://i1.sndcdn.com/artworks-000072754635-hcs91o-t500x500.jpg",
			artist: "Elliott Yamin",
			audio: `${WaitForYou}`,
			color: ["#466371", "#E8C5A7"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Starving",
			cover: "https://m.media-amazon.com/images/I/71XPZvHWBNL._SS500_.jpg",
			artist: "Hailee Steinfeld, Grey",
			audio: `${Starving}`,
			color: ["#17161D", "#791B1D"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "fumes",
			cover: "https://images.genius.com/9d9e58c6b8f6642888f52bc3598e5b58.500x500x1.jpg",
			artist: "EDEN",
			audio: `${fumes}`,
			color: ["#17181B", "#EAEAEA"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "gold",
			cover:
				"https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Vertigo_EDEN_Album_Cover.png/220px-Vertigo_EDEN_Album_Cover.png",
			artist: "EDEN",
			audio: `${gold}`,
			color: ["#4F738A", "#9BA8C2"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Maniac",
			cover:
				"https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Conan_Gray_-_Maniac.png/220px-Conan_Gray_-_Maniac.png",
			artist: "Conan Gray",
			audio: `${Maniac}`,
			color: ["#819EB5", "#F30000"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Ultralife",
			cover: "https://m.media-amazon.com/images/I/81VO8rj3vLL._SS500_.jpg",
			artist: "Oh Wonder",
			audio: `${Ultralife}`,
			color: ["#544C49", "#BFC0C2"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Blueberry Faygo",
			cover: "https://m.media-amazon.com/images/I/81JrhcAZV9L._SS500_.jpg",
			artist: "Lil Mosey",
			audio: `${BlueberryFaygo}`,
			color: ["#00CDF7", "#006DBE"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "This Is My Version",
			cover:
				"https://t2.genius.com/unsafe/168x0/https%3A%2F%2Fimages.genius.com%2F8ecd370e93e9985807bd3e326d7d9c5a.1000x1000x1.jpg",
			artist: "Conor Maynard",
			audio: `${ThisIsMyVersion}`,
			color: ["#817E87", "#D2CCC6"],
			id: uuidv4(),
			active: false,
		},
		// {
		// 	name: "Snowstalgia",
		// 	cover:
		// 		"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
		// 	artist: "invention_",
		// 	audio: "https://mp3.chillhop.com/serve.php/?mp3=10305",
		// 	color: ["#45418E", "#CDB6CA"],
		// 	id: uuidv4(),
		// 	active: false,
		// },
		// {
		// 	name: "Daylight",
		// 	cover:
		// 		"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
		// 	artist: "Aiguille",
		// 	audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
		// 	color: ["#EF8EA9", "#ab417f"],
		// 	id: uuidv4(),
		// 	active: false,
		// },
		// {
		// 	name: "Keep Going",
		// 	cover:
		// 		"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
		// 	artist: "Swørn",
		// 	audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
		// 	color: ["#CD607D", "#c94043"],
		// 	id: uuidv4(),
		// 	active: false,
		// },
		// {
		// 	name: "Nightfall",
		// 	cover:
		// 		"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
		// 	artist: "Aiguille",
		// 	audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
		// 	color: ["#EF8EA9", "#ab417f"],
		// 	id: uuidv4(),
		// 	active: false,
		// },
		// {
		// 	name: "Reflection",
		// 	cover:
		// 		"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
		// 	artist: "Swørn",
		// 	audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
		// 	color: ["#CD607D", "#c94043"],
		// 	id: uuidv4(),
		// 	active: false,
		// },

		// {
		// 	name: "Flowers",
		// 	cover:
		// 		"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
		// 	artist: "The Field Tapes, xander.",
		// 	audio: "https://mp3.chillhop.com/serve.php/?mp3=11249",
		// 	color: ["#546169", "#DBE8DF"],
		// 	id: uuidv4(),
		// 	active: false,
		// },
	];
}

export default musicList;
