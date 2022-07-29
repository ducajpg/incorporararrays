class Peliculas{
    constructor(titulo, estreno, genero, genero2, calificacion){
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.genero2 = genero2;
        this.calificacion = calificacion
    }
}
const pelis = [];
pelis.push(new Peliculas("Terminator", 1984, "sci-fi", "accion", 8.1))
pelis.push(new Peliculas("Las brujas de Eastwick", 1987, "comedia", "fantasia", 6.5))
pelis.push(new Peliculas("Blade runner", 1982, "sci-fi", "drama", 8.1))
pelis.push(new Peliculas("Mad max", 2015, "accion", "sci-fi", 8.1))
pelis.push(new Peliculas("Groundhog Day", 1993, "comedia", "fantasia", 8.1))
pelis.push(new Peliculas("The Silence of the Lambs", 1991, "crimen", "suspenso", 8.6))


let pelisBuscada = prompt("Ingrese el genero que busca")
const pelisEncontradas = pelis.filter(e => e.genero.includes (pelisBuscada))
console.log(pelisEncontradas)