var obj = {  'disco de juan gabriel':   20,   
              'disco de pinocho':   25,
              'disco de jose maria':   19,
              'disco de pato donald':   17,
              'disco de jose jose':   18}; 

var selec = document.getElementById("articulo");

for (const property in obj) {
  var selectt = document.createElement("option");
  selectt.value=`${obj[property]}`;  
  selectt.text=`${property}`;
  selec.appendChild(selectt); 
};
function agregar(){  
  var articulo=document.getElementById("articulo");  
  var cantidad=document.getElementById("cantidad-producto");  
  var importe=document.getElementById("Importe");  
  var vender=document.getElementById("total-vender");  
  var total = document.getElementById("precio-total");      
  var pago = document.getElementById("pago");
  
  importe.value=articulo.value*cantidad.value;  
  vender.innerHTML=cantidad.value;
  total.innerHTML=importe.value;

  var oRows = document.getElementById('misCompras').getElementsByTagName('tr');
  var iRowCount = oRows.length;  //numero de filas      
  var Elemento = document.createElement("tr");
  TableRow= "<tr><td>"+iRowCount +"</td><td>"+articulo.options[articulo.selectedIndex].text+"</td><td>"+cantidad.value+"</td><td>"+articulo.value+"</td><td>"+importe.value+"</td></tr>";
  Elemento.innerHTML = TableRow;
  document.getElementById("tabla-carrito").appendChild(Elemento);

  var guardar=contar();
  vender.innerHTML=guardar[0];
  total.innerHTML=guardar[1];
  pago.innerHTML=guardar[1] - descontar();

}


// var carritoCompra = document.getElementById("carrito");
// carritoCompra.addEventListener('click', agregar);