// funcion que retorna el id del personaje
const getHash = () =>
	location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default getHash

//Primero obtenemos el "hash" con location.hash
//el "hash" sería la parte de la URL que viene después del símbolo #
//En este caso sería algo así: #/id/ o #/about/
//con .slice() eliminamos el primer elemento (#)
//volvemos todo minuscula con .toLocaleLowerCase()
//con .split('/') hacemos que nuestra cadena de texto se vuelva un arreglo eliminando el slash (/)
//luego de esto nos quedaría algo así: '', id, ''
//finalmente obtenemos el segundo elemento del arreglo con el [1]
