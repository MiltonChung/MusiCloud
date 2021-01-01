import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
	return (
		<nav className={`${libraryStatus ? "squeezed" : ""}`}>
			<a href="miltonchung.com" className="logo">
				Musi<span>Cloud</span>
			</a>
			<button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default Nav;
