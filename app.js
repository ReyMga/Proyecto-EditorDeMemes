// Elementos a los que le aplicaremos el innerHTML o donde se ingresa el DOM
const topText = document.getElementById('topText');
const segundoTexto = document.getElementById('boton-bajo');
const colorLetra = document.getElementById('colorLetra');
const fondoLabel = document.getElementById('fondoLabel');
const textoColor = document.getElementById('textoColor');
const colorLabelFondo = document.getElementById('colorLabelFondo');
const centerText = document.getElementById('centroTextoMedio');
const contenedorPrincipal = document.getElementById('contenedorPrincipal');
const valorEspaciado = document.getElementById('espaciadoValue');
const valorInterlineado =  document.getElementById('interlineadoValue');
const colorImagen = document.getElementById('colorImagen');
const colorImagenSpan = document.getElementById('colorImagenSpan');
const opcionesFondo = document.getElementById('opcionesFondo');
const brillo = document.getElementById('brillo');
const ajustesBrillo = document.getElementById('ajustes-brillo');
const opacidad = document.getElementById('opacidad');
const contraste = document.getElementById('contraste');
const desenfoque = document.getElementById('desenfoque');
const escalaColores = document.getElementById('escalaColores');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const botonSaturado= document.getElementById('botonSaturado');
const negativo = document.getElementById('negativo');



// Elementos a los que se les aplicara los eventos
const topInput = document.getElementById('ingresoTitulo');
const topCheck = document.getElementById('top-check');
const topCheckBajo = document.getElementById('top-check-2');
const textoInferior = document.getElementById('textoInferior');
const estilosDeFuentes = document.getElementById('estilosDeFuentes');
const tamañoLetra = document.getElementById('tamañoLetra');
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');
const centrar = document.getElementById('centrar');
const transparente = document.getElementById('transparente');
const urlImg = document.getElementById('inputImagen');
const botonContornoClaro = document.getElementById('botonContorno-claro');
const botonContornoOscuro = document.getElementById('botonContorno-oscuro');

/***************************************************/
//Cambio de texto superior

topInput.addEventListener('keyup', () => {
  topText.innerHTML = topInput.value;
});

/***************************************************/
//Cambio de texto inferior

textoInferior.addEventListener('keyup', () => {
  segundoTexto.innerHTML = textoInferior.value;
});

/***************************************************/
//Top check, texto superior


topCheck.addEventListener('click',() => {
  if(topCheck.checked){
    topText.style.visibility = 'hidden';
  } else {
    topText.style.visibility = 'visible';
  }
});

/**************************************/
//Top check, texto inferior

topCheckBajo.addEventListener('click',() => {
  if(topCheckBajo.checked){
    segundoTexto.style.visibility = 'hidden';
  } else {
    segundoTexto.style.visibility = 'visible';
  }
});

/***************************************************/

//Estilos de fuente superior

estilosDeFuentes.addEventListener('change', () => {
  topText.style.fontFamily = `${estilosDeFuentes.value}`;
});

//Estilos de fuente inferior

estilosDeFuentes.addEventListener('change', () => {
  segundoTexto.style.fontFamily = `${estilosDeFuentes.value}`;
});

/***************************************************/
//Tamaño de Letra superior

tamañoLetra.addEventListener('keyup', () => {
  topText.style.fontSize = `${tamañoLetra.value}px`
});


tamañoLetra.addEventListener('click', () => {
  topText.style.fontSize = `${tamañoLetra.value}px`
});

//Tamaño de Letra inferior

tamañoLetra.addEventListener('keyup', () => {
  segundoTexto.style.fontSize = `${tamañoLetra.value}px`
});


tamañoLetra.addEventListener('click', () => {
  segundoTexto.style.fontSize = `${tamañoLetra.value}px`
});

/***************************************************/

//Dirección de texto

izquierda.addEventListener('click', (e) => {
  e.preventDefault();
  topText.style.textAlign = 'left';
  segundoTexto.style.textAlign = 'left';
});

derecha.addEventListener('click', (e) => {
  e.preventDefault();
  topText.style.textAlign = 'right';
  segundoTexto.style.textAlign = 'right';
});

centrar.addEventListener('click', (e) => {
  e.preventDefault();
  topText.style.textAlign = 'center';
  segundoTexto.style.textAlign = 'center';
});

/***************************************************/

//Color de letra

colorLetra.addEventListener('input', (e) =>{
  const colorTexto = e.target.value;
  topText.style.color = colorTexto;
  segundoTexto.style.color = colorTexto;
  textoColor.innerHTML = colorTexto.toUpperCase();
})

//Cambio color de fondo 

fondoLabel.addEventListener('input', (e) =>{
  const backgrondColor = e.target.value;
  topText.style.backgroundColor = backgrondColor;
  segundoTexto.style.backgroundColor = backgrondColor;
  colorLabelFondo.innerHTML = backgrondColor.toUpperCase();
})

/***************************************************/
//Transparencia de fondo

function actualizarFondoTexto() {
  if (!transparente.checked) {
    const color = fondoLabel.value
    fondoLabel.innerText = color.toUpperCase()
    topText.style.backgroundColor = color
    segundoTexto.style.backgroundColor = color
    topText.style.position=''
  }else {
    topText.style.backgroundColor = 'transparent'
    segundoTexto.style.backgroundColor = 'transparent'
    topText.style.position='absolute'
  }
}

/***************************************************/

//Cambio de contorno en la letra

function contornear(e, contorno){
  e.preventDefault();
  switch (contorno) {
    case  'ninguno':
      topText.style.textShadow='none';
      segundoTexto.style.textShadow='none';
      break;
  
    case 'claro':
      topText.style.textShadow= '2px 2px #FFF, -2px -2px #FFF,  2px 2px #FFF, -2px -2px #FFF, 2px 2px #FFF';
      segundoTexto.style.textShadow= '2px 2px #FFF, -2px -2px #FFF,  2px 2px #FFF, -2px -2px #FFF, 2px 2px #FFF';
      break;
    case 'oscuro':
      topText.style.textShadow='2px 2px #000, -2px -2px #000,  2px 2px #000, -2px -2px #000, 2px 2px #000';
      segundoTexto.style.textShadow='2px 2px #000, -2px -2px #000,  2px 2px #000, -2px -2px #000, 2px 2px #000';
      break;
  }
  
}

/***************************************************/

//Espaciado 

const espaciadoTexto = () => {
  const espaciado = valorEspaciado.value
  topText.style.padding = `${espaciado}px 50px`
  segundoTexto.style.padding = `${espaciado}px 50px`
}

/***************************************************/

//Interlineado 

const aplicandoInterlineado = () => {
  const interlineadoDefinido = valorInterlineado.value
  topText.style.lineHeight = interlineadoDefinido;
  segundoTexto.style.lineHeight = interlineadoDefinido;
}

/***************************************************/

//Cambio de "aside texto" a "aside imagen"

const panelImg = document.getElementById('panelImg');
const textoSeccion = document.getElementById('textoSeccion');

showImageAtributes();
function showImageAtributes(){
  textoSeccion.style.display= 'none';
  panelImg.style.display = '';
}

function showTextAtributes(){
  panelImg.style.display='none';
  textoSeccion.style.display= ''; 
}

/***************************************************/

/****cambio  dark mode - light mode****/

  //Agrego funcionalidad a los botones

  // Unifico los botones

  //En la línea 233, tuve que añadirle un split al href, porque me devolvía la ruta completa. Esto se debe a que yo elegi armar mi Dark mode y light mode, basandome en archivos de CSS, en lugar de llamarlo desde el body como lo haría normalmente.

function cambiarArchivo(boton){
  let archivoActual = document.getElementById('cssArchivo').href.split('/')[document.getElementById('cssArchivo').href.split('/').length - 1];
  if(archivoActual === 'style.css'){
    document.getElementById('cssArchivo').href = './darkMode.css';
    boton.innerText='🌞 Modo Claro';
   
  }else{
    document.getElementById('cssArchivo').href = './style.css';
    boton.innerText='🌚 Modo oscuro';
  }
}

/*****************************************************************************************************/

//Comienzo a realizar las funciones para la sección imagenes


/***************************************************/
// colocar URL para visualizar imagen

urlImg.addEventListener('keyup', (e) => {
  const src = urlImg.value;
  centerText.style.backgroundImage = `url('${src}')`;
  centerText.style.backgroundPosition = 'center';
  centerText.style.backgroundRepeat = 'no-repeat';
  centerText.style.backgroundSize = 'cover';
})

/***************************************************/
//Fondo color de imagen

colorImagen.addEventListener('input', (e) =>{
  const backgrondColor = e.target.value;
  centerText.style.backgroundColor = backgrondColor;
  colorImagenSpan.innerHTML = backgrondColor.toUpperCase();
})


/***************************************************/
//tipo de fondo en imagenes
colorImagen.addEventListener('input', cambioFiltroFondo)
opcionesFondo.addEventListener('change', cambiosFiltrosColor)

const cambioFiltroFondo = (evento) => {
  colorImagen.innerText = evento.target.value.toUpperCase()
  centerText.style.backgroundColor = evento.target.value
}

const cambiosFiltrosColor = (evento) => {
  centerText.style.backgroundBlendMode = evento.target.value
}


/***************************************************/
//Cambiar valores del brillo

brillo.addEventListener('change', () =>{
  const valorBrillo = brillo.value;
  centerText.style.filter = `brightness(${valorBrillo})`
})

/***************************************************/
//Cambiar opacidad de imagen

opacidad.addEventListener('change', () =>{
  const valorOpacidad = opacidad.value;
  centerText.style.filter = `opacity(${valorOpacidad})`
})

/***************************************************/

//Cambiar contraste de imagen

contraste.addEventListener('change', () =>{
  const valorContraste = contraste.value;
  centerText.style.filter = `contrast(${valorContraste}%)`
})


/***************************************************/

//Cambiar desenfoque de imagen

desenfoque.addEventListener('change', () =>{
  const valorDesenfoque = desenfoque.value;
  centerText.style.filter = `blur(${valorDesenfoque}px)`
})

/***************************************************/

//Cambiar escala de grises

escalaColores.addEventListener('change', () =>{
  const valorEscalaColores= escalaColores.value;
  centerText.style.filter = `grayscale(${valorEscalaColores}%)`
})

/***************************************************/

//Cambiar a color sepia la imagen

sepia.addEventListener('change', () =>{
  const valorSepia= sepia.value;
  centerText.style.filter = `sepia(${valorSepia}%)`
})

/***************************************************/

//Cambiar hue a la imagen

hue.addEventListener('change', () =>{
  const valorHue= hue.value;
  centerText.style.filter = `hue-rotate(${valorHue}deg)`
})

/***************************************************/

//Cambiar saturacion a la imagen

botonSaturado.addEventListener('change', () =>{
  const valorBotonSaturado= botonSaturado.value;
  centerText.style.filter = `saturate(${valorBotonSaturado}%)`
})

/***************************************************/

//Cambiar negativo a la imagen

negativo.addEventListener('change', () =>{
  const valorNegativo= negativo.value;
  centerText.style.filter = `invert(${valorNegativo})`
})

/***************************************************/