const NavBar = ({ selectedColorName, selectedColorHex }) => {
	return (
		<>
			<nav>
				<h1>Color Picker</h1>
				<div>
					Selected Color:{" "}
					{selectedColorName && (
						<span
							style={{ backgroundColor: selectedColorHex, padding: "1rem" }}
						>
							{selectedColorName}
						</span>
					)}
				</div>
			</nav>
		</>
	);
};

export default NavBar;
