"user strict";

const menuXml = ()=>{
  var xhttp = new XMLHttpRequest(); //para solicitar datos de un servidor web (en mi caso es XAMMP).
  
  xhttp.onreadystatechange = function () { //se ejecutará cada vez que el objeto XMLHttpRequest cambie de estado.
    if (this.readyState == 4 && this.status == 200) { // si la respuesta está lista...
      let secciones = xhttp.responseXML.getElementsByTagName("seccion");//guarda todas las secciones del archivo.xml.
  
      let str = '<ul class="menu-horizontal">\n';
  
      for (let seccion of secciones) { //para cada sección de las secciones...
        let subStr = "";
        for (let i = 1; i < seccion.children.length; i++) // y para cada hijos...
          subStr += `
  
        <li><a href="#">${seccion.children[i].textContent}</a></li>
  
        `; //se añade cada hijo en subStr.
  
        str += `
  
        <li>
          <a href="#">${seccion.children[0].textContent}</a>
          <ul class="menu-vertical">
              ${subStr}
          </ul>
        </li>
          
        `; //y se añade cada grupo de hijos con su correspondiente padre en str.
      }
  
    //   str += `
    //     </ul>
    //     <button type="button" class="btn btn-primary">Actualizar Menú</button>
    //   `;//también se añade el botón que actuariará el menú.
  
      document.getElementById("menu").innerHTML = str; // todo el codigo html de str se mostrará en el nav "menu".
      window.onload();// se recargará la ventana sin la necesidad de recargar la página.
    }
  };
  
  xhttp.open("GET", "./XML/info.xml", true);//Abre el archivo info.xml y obtiene los datos.
  xhttp.send();//envía la solicitud (al navegador del cliente).
}

// window.onload=function(){//función que se cargará con la ventana.
//   var boton = document.querySelector(".btn"); //guarda el botón.
//   boton.addEventListener("click", menuXml); // cuando se le de clic al botón, se ejecuta la función para actualizar el menú.
// }

menuXml(); //Carga el menú.