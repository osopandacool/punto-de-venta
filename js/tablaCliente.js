//añadir filas a la tabla
TableRow="<tr><td>1</td><td>abelardo Hernandez Hernandez</td><td>heha980525p65</td></tr>";
var Elemento = document.createElement("tr");
Elemento.innerHTML = TableRow;
document.getElementById("cliente-tabla").appendChild(Elemento);

TableRow="<tr><td>2</td><td>Maria Angelita Hernandez Huerta</td><td>heh980treye65</td></tr>";
var Elemento = document.createElement("tr");
Elemento.innerHTML = TableRow;
document.getElementById("cliente-tabla").appendChild(Elemento);

TableRow="<tr><td>3</td><td>Patricio Estrella</td><td>hetreyerp65</td></tr>";
var Elemento = document.createElement("tr");
Elemento.innerHTML = TableRow;
document.getElementById("cliente-tabla").appendChild(Elemento);

TableRow="<tr><td>4</td><td>Sor Juana Ines de la Cruz</td><td>hehauytr5p65</td></tr>";
var Elemento = document.createElement("tr");
Elemento.innerHTML = TableRow;
document.getElementById("cliente-tabla").appendChild(Elemento);

TableRow="<tr><td>5</td><td>Jose Morelos Vargas</td><td>hehayter5p65</td></tr>";
var Elemento = document.createElement("tr");
Elemento.innerHTML = TableRow;
document.getElementById("cliente-tabla").appendChild(Elemento);

//funcion para detectar si se dio clic en alguna fila de la tabla

function addRowHandlers() {
  var rows = document.getElementById("cliente-tabla").rows;
  for (i = 0; i < rows.length; i++) {
      rows[i].onclick = function(){ return function(){
             var nombre = this.cells[1].innerHTML;
             var rfc = this.cells[2].innerHTML;
             document.getElementById("Nombre").value = nombre;
             document.getElementById("RFC").value = rfc;
      };}(rows[i]);
  }
}


window.onload = addRowHandlers();  //cualquier clic llama a esta función

    

