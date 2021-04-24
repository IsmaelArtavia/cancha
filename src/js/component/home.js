import React from "react";
import "../../styles/home.scss";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div className="cancha">
				<div className="bola"></div>
				<canvas width="400" height="400" id="lienzo"></canvas>
			</div>
		</div>
	);
}
