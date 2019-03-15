import React from "react";
import useCoordenadas from './useCoordenadas'


const App = () => {
	const coordenadas = useCoordenadas()
    return coordenadas.latitud == null?(
		<div>Cargando</div>
	):(
		<div>
			<h2>Latitud {coordenadas.latitud}</h2>
			<h2>Longitud {coordenadas.longitud}</h2>
		</div>
	)
};

export default App;
