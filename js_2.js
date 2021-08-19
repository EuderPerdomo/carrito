let local = localStorage.getItem("elementos");
let testo = JSON.parse(local);

if (testo) {
    console.log('Ya Creado')
}else{
    testo=[]
    console.log('Creado')
}

function addItem() {
    let item=document.getElementById('item').value
    let itemCost=document.getElementById('itemCost').value
    if(item){
        testo.push({'descripcion':item,'valor':itemCost})
    }
    showItem()

}

showItem()

function showItem() {

    document.getElementById('item').value=" "
    document.getElementById('itemCost').value=" "
    let html=''
    for (let i = 0; i < testo.length; i++) {

        html+= `<div class="col-4">${testo[i].descripcion} </div>`
        html+= `<div class="col-4">${testo[i].valor} </div>`
        html+= `<div class="col-4"> <a href="#" class ="btn btn-danger" onclick="deleteItem(${i})">X</a> </div>`
        
    }
    
    const myJ = JSON.stringify(testo);
    localStorage.setItem("elementos", myJ);
    document.getElementById('items').innerHTML=html

}

function deleteItem(item) {
    testo.splice(item,1)
    showItem()
}