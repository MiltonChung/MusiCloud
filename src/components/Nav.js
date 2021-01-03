import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus, darkMode, setDarkMode, appRef }) => {
	const toggleDarkLight = () => {
		appRef.current.classList.toggle("DARK-MODE");
		setDarkMode(!darkMode);
	};

	return (
		<nav className={`${libraryStatus ? "squeezed" : ""}`}>
			<a href="https://miltonchung.com/" className="logo" title="Go to Milton's Portfolio Website!">
				Musi<span>Cloud</span>
			</a>

			<div className="buttons">
				<button className="toggleDarkLightBtn" onClick={toggleDarkLight}>
					{darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
				</button>
				<button
					className={`libraryBtn ${libraryStatus ? "active" : ""}`}
					onClick={() => setLibraryStatus(!libraryStatus)}>
					Library <FontAwesomeIcon icon={faMusic} />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
