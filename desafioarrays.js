function Peliculas(titulo, estreno, genero, genero2, calificacion){
    this.titulo = titulo;
    this.estreno = estreno;
    this.genero = genero;
    this.genero2 = genero2;
    this.calificacion = calificacion
}

const peli1 = new Peliculas ("Terminator", 1984, "sci-fi", "accion", 8.1)
const peli2 = new Peliculas ("Las brujas de Eastwick", 1987, "comedia", "fantasia", 6.5)