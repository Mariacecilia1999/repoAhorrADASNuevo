
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)


let agregarCategoria = () =>{
   let categoria 
   
   categoria = $('#capturarCategoria').value


   let categoriaNueva = $('#categoriaNueva')
   categoriaNueva.innerHTML += `<div class="categoriaAgregada is-flex is-justify-content-space-between column pt-6">
                                    <p>${categoria}</p>
                                    <div>
                                       <a href="#" class="editarCategoria">Editar</a>
                                       <a href="#" class="eliminarCategoria p-2">Eliminar</a>
                                    </div>
                                 </div>`


   //Eliminar categoría
   let eliminar = $$('.eliminarCategoria')
   let categoriaAgregada = $$('.categoriaAgregada')


   eliminar.forEach(e =>{
      e.addEventListener('click', () =>{
        
         for(let i = 0; i <= categoriaAgregada.length; i++){
            
            //Pregunto si existe
            if(categoriaAgregada[i]){
               categoriaAgregada[i].addEventListener('click', function(){
                  categoriaAgregada[i].className = ' ocultar'

               })
            }   
         }
      })
   })


   //Editar categoría
   let editarCategoria = $$('.editarCategoria')
   editarCategoria.forEach(editar =>{
      editar.addEventListener('click', function(){
         $('.categoriaEditar').classList.remove('ocultar')
         $('.categoriaLista').classList.remove('mostrar')
         $('.categoriaLista').classList.add('ocultar')


         $('#agregarCategoriaNueva').addEventListener('click', function(){
            let categoriaN = $('#capturarNombreNuevo').value
            categoriaNueva.innerHTML = `<div class="categoriaAgregada is-flex is-justify-content-space-between column pt-6">
            <p>${categoriaN}</p>
            <div>
               <a href="#" class="editarCategoria">Editar</a>
               <a href="#" class="eliminarCategoria p-2">Eliminar</a>
            </div>
         </div>`

            $('.categoriaEditar').classList.add('ocultar')
            $('.categoriaLista').classList.remove('ocultar')
         })
        


         $('#cancelarCategoria').addEventListener('click', function(){
            $('.categoriaEditar').classList.add('ocultar')
            $('.categoriaLista').classList.remove('ocultar')
         })
      })
   })



 }                          

$('#agregarCategoria').addEventListener('click', agregarCategoria)


//Mostrar sección categoría

let mostrarSeccionCategoria = () =>{
    //OcultarSeccionReportes en sección categoría
    $('.reportesSinResultados').classList.remove('mostrar')
    $('.reportesSinResultados').classList.add('ocultar')

   $('.categoriaLista').classList.remove('ocultar')
   $('.categoriaLista').classList.add('mostrar')
}



$('#mostrarSeccionCategoria').addEventListener('click', mostrarSeccionCategoria)
  



//Sección reportes

let mostrarSeccionReportes = () =>{
   //Ocultar sección categoría en reportes
   $('.categoriaLista').classList.remove('mostrar')
   $('.categoriaLista').classList.add('ocultar')
   
   $('.reportesSinResultados').classList.remove('ocultar')
   $('.reportesSinResultados').classList.add('mostrar')
   
}


$('.mostrarSeccionReporte').addEventListener('click', mostrarSeccionReportes)