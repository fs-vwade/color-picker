import { useState } from "react";
import { colors_list } from "./data";
import NavBar from "./NavBar.jsx";
import "./App.css";

export default function App() {
	const [colors, setColor] = useState(colors_list);
	const [selectedColor, setSelectedColor] = useState(null);

	return (
		<div>
			<nav>
				<h1>Color Picker</h1>
				<div>
					Selected Color:{" "}
					{selectedColor && (
						<span
							style={{ backgroundColor: selectedColor.hex, padding: "1rem" }}
						>
							{selectedColor.color}
						</span>
					)}
				</div>
			</nav>
			<main>
				<div className="container">
					{colors.map((color, idx) => {
						return (
							<div key={idx} className="shape">
								<div
									style={{ backgroundColor: color.hex }}
									onClick={() => {
										setSelectedColor(color);
									}}
									className="circle"
								>
									{color.color}
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</div>
	);
}
