const NavBar = ({ color, hex }) => {
	return (
		<nav>
			<h1>Color Picker</h1>
			<span>Chosen Color:</span>
			{(color && (
				<span style={{ backgroundColor: hex, padding: "1rem" }}>
					{(color, hex)}
				</span>
			)) || <span>No Color Selected</span>}
		</nav>
	);
};

export default NavBar;
