//Mi algoritmo es una tienda de libros ya declarados 
const libros = [
    {id:1, titulo:"Harry Potter y la Piedra filosofal", autor:"J. K. Rowling", precio:2500},
    {id:2, titulo:"Los vecinos mueren en las novelas", autor:"Sergio Aguirre", precio:1200},
    {id:3, titulo:"En las montalas de la locura", autor:"H. P. Lovecraft", precio:1500},
    {id:4, titulo:"Alicia en el pais de las maravillas", autor:"Lewis Carroll", precio:1300},
    {id: 5, titulo:"El último regalo", autor:"Sebastian Fitzek", precio:1000},
    {id:6, titulo:"La casa de los conejos", autor:"Laura Alcoba", precio:780},
]

const libros_carrito =[]


function buscar_libro(id){
    return libros.find(item => item.id === id) || alert("Obra no encontrada");
}


function agregar_carrito(libro){
    libros_carrito.push(libro)
}

agregar_libros = true;
while(agregar_libros){
    
    let cantidad_libros = "";
     for(let libro of libros){
        cantidad_libros += libro.id + " - " + libro.titulo + " - " + libro.autor + " -$" + libro.precio + "\n";
     }
     let id_libro = parseInt(prompt("Seleccione las obras a agregar:\n" + cantidad_libros));
     let libro = buscar_libro(id_libro);
     console.log(libro)
     
     agregar_libros = confirm("¿Desea agregar más libros?")
     if(libro != null ){
        agregar_carrito(libro)

     }
     
}
console.log(libros_carrito)
total_libros=0
cantidad=0

libros_carrito.forEach(lib => {
    total_libros += total_libros + lib.precio 
    
});
alert("El total a pagar es de: " + total_libros)

/* function eliminar_carrito(id){
    let numero = libros_carrito.indexOf(item => item.id === id)

} */







/* while(agregar_libros){
    let cantidad_libros = "";
     for(let libro of libros_carrito){
        cantidad_libros += libro.id + "-" + libro.titulo + libro.autor + " -$" + libro.precio + "\n";
     }
     let id_libro = parseInt(prompt("Seleccione las obras que desea eliminar del carrito: (marque 0 para salir)\n" + cantidad_libros));
     let libro = buscar_libro(id_libro)
     
     if(libro > 0 ){
        eliminar_carrito(id_libro)
     } else {
        break;
     }
     agregar_libros = confirm("¿Desea eliminar más libros?")
     
     
}
 */