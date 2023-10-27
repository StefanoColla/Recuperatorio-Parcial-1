let n=new Date();
let items = [];

function mes(){
    if(n.getMonth()<10)
        return "0"+n.getMonth();
    else
        return n.getMonth();
}
function dia(){
    if(n.getDate<10)
        return "0"+n.getDate();
    else
        return n.getDate();
}
let d=document.getElementById("fecha").value = n.getFullYear() + "-"+ mes() + "-" + dia();

let agregar_plato=document.getElementById("agregar_plato").onclick = function(){
    let plato=document.getElementById("plato");
    items.push(plato.value);
};

