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

				<div className="circuloCentral"></div>
				<div className="rayaCentral"></div>
				<div className="areaGrandeIzquierda"></div>
				<div className="areaPequenaIzquierda"></div>
				<div className="semiCirculoIzquierda"></div>
				<div className="areaGrandeDerecha"></div>
				<div className="areaPequenaDerecha"></div>
				<div className="semiCirculoDerecha"></div>
				<div className="circuloPenalIzquierda"></div>
				<div className="circuloPenalDerecha"></div>
				<div className="cornerArribaIzquierda"></div>
				<div className="cornerAbajoIzquierda"></div>
				<div className="cornerArribaDerecha"></div>
				<div className="cornerAbajoDerecha"></div>

				<canvas width="400" height="400" id="lienzo"></canvas>
			</div>
		</div>
	);
}
