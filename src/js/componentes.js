import '../css/componentes.css';

export const saludar = (nombre) => {
	console.log("Creando un h1");

	const h1 = document.createElement("h1");
	h1.innerText = `Hola, ${nombre} , como estasccc?`;
	document.body.append(h1);
}