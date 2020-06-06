function populateUfs(){

    const ufSelect=document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states =>{
        for(state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
    
}

populateUfs()

function getCities(event){

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]") 

    const ufValue = event.target.value

    stateInput.value = event.target.options[event.target.selectedIndex].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</value>"

    citySelect.disabled = true
    
    fetch(url)
    .then(res=>res.json())
    .then(cities => {
        for(city of cities){
            citySelect.innerHTML+=`<option value="${city.nome}">${city.nome}</option>`
        }
    })

    citySelect.disabled =false
 
}

document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//itens de coleta
//pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")
for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

const itemsInput = document.querySelector("input[name=items]")

function handleSelectedItem(event){
    const itemLi=event.target
    //add or remove class
    itemLi.classList.toggle("selected")

    const itemId=itemLi.dataset.id

    const alreadySelected=selectedItems.findIndex(item => item==itemId)
    console.log(alreadySelected)

    if(alreadySelected >= 0){
        const filteredItems=selectedItems.filter(item => item!=itemId)
    
       selectedItems = filteredItems
    }
    else{
        selectedItems.push(itemId)
    }
    console.log(selectedItems)
    itemsInput.value = selectedItems
}
