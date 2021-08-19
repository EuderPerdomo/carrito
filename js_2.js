let local = localStorage.getItem("elementos");
let texto = JSON.parse(local);

if (texto) {
    console.log('Ya Creado')
}else{
    texto=[]
    console.log('Creado')
}

function addItem() {
    let item=document.getElementById('item').value
    let itemCost=document.getElementById('itemCost').value
    if(item){
        texto.push({'descripcion':item,'valor':itemCost})
    }
    showItem()

}

showItem()

function showItem() {

    document.getElementById('item').value=" "
    document.getElementById('itemCost').value=" "
    let html=''
    for (let i = 0; i < texto.length; i++) {

        html+= `<div class="col-4">${texto[i].descripcion} </div>`
        html+= `<div class="col-4">${texto[i].valor} </div>`
        html+= `<div class="col-4"> <a href="#" class ="btn btn-danger" onclick="deleteItem(${i})">X</a> </div>`
        
    }
    
    const myJ = JSON.stringify(texto);
    localStorage.setItem("elementos", myJ);
    document.getElementById('items').innerHTML=html

}

function deleteItem(item) {
    texto.splice(item,1)
    showItem()
}