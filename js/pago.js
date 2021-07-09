function contar(){
    var guardar = [];
    var filas = document.getElementById('tabla-carrito').getElementsByTagName("td");    
    var recorrido= filas.length/5;        
    var total = 0;    
    for (var index = 1; index <= recorrido; index++) {        
        total = total + parseInt(filas[(index * 5 -1)].innerHTML);               
    }
    guardar.push(recorrido);
    guardar.push(total);
    return guardar;
}
function descontar(){    
    var filas = document.getElementById('tabla-pagar').getElementsByTagName("td");    
    var recorrido= filas.length/5;        
    var total = 0;    
    for (var index = 1; index <= recorrido; index++) {        
        total = total + parseInt(filas[(index * 5 -1)].innerHTML);               
    }    
    
    return total;
}
function pagar(){
    var formaPago=document.getElementById("validationCustom04"); 
    var MetodoPago = formaPago.options[formaPago.selectedIndex].text;    
    var pago = document.getElementById("pago");
    var nuevoPago = parseInt(pago.innerHTML);
    if (nuevoPago==0) {
        $().alert("no se han seleccionado productos")
    }else{
        var oRows = document.getElementById('tabla-pago').getElementsByTagName('tr');
        var iRowCount = oRows.length;  //numero de filas      
        var Elemento = document.createElement("tr");              
               
        TableRow= "<tr><td>"+iRowCount +"</td><td>"+MetodoPago+"</td><td>"+cantidad.value+"</td><td>"+0+"</td><td>"+cantidad.value+"</td></tr>";        
        Elemento.innerHTML = TableRow;
        document.getElementById("tabla-pagar").appendChild(Elemento);
        nuevoPago = nuevoPago - descontar();  
        pago.innerHTML = parseInt(nuevoPago); 
    }

}


