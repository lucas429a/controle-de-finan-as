/* Desenvolva sua lógica aqui */
import { insertedValues , valuesCategory} from "./valuesData.js";
import {showForm} from "./modal.js";


const allList = ()=>{
  const input = document.querySelector("#todos");
  input.addEventListener("click",function(e){
    render(insertedValues);
  })
}
const entryList = ()=>{
  const input = document.querySelector("#entradas");
  input.addEventListener("click",function(e){
    const list = insertedValues.filter(values => values.categoryID === 0)
    render(list)
  })
}
const exitList = ()=>{
  const input = document.querySelector("#saidas");
  input.addEventListener("click",function(e){
    const list = insertedValues.filter(values => values.categoryID === 1)
    render(list)
  })
}

const creatList =(obj)=>{
    const container = document.querySelector(".li__container")
      
    const card = document.createElement("li");
    const div = document.createElement("div");
    const price = document.createElement("p");
    const extractType= document.createElement("h6");
    const button = document.createElement("button");

    button.innerText = "x";
    price.innerText = "R$" + obj.value;
    extractType.innerText = valuesCategory[obj.categoryID];
      
    div.appendChild(price);
    div.appendChild(extractType);
    div.appendChild(button);
    card.appendChild(div);

    card.classList.add("card_container")
    div.classList.add("list_div")
    price.classList.add("list_price")
    extractType.classList.add("list_type")
    button.classList.add("list_button")

    button.addEventListener("click",function(e){
      let listItem = insertedValues.indexOf(obj)
      insertedValues.splice(listItem,1);
      render(insertedValues);
      Totalbalance(insertedValues);
    })

    container.appendChild(card);
    return card
  }
export const render = (values) =>{
  const listcontainer = document.querySelector(".li__container")
  listcontainer.innerHTML =''
  values.forEach((value)=>{
    const card = creatList(value)
    listcontainer.appendChild(card)
  })
}
export const Totalbalance = (array)=>{
  const renderBalance = document.querySelector(".li__coin")
  
  const finalBalance =  array.reduce((acc,actual)=>{
    if(actual.categoryID == 0){
      return acc + actual.value
    }else if(actual.categoryID == 1){
      return acc - actual.value
    }else{
      return acc + actual.value
    }
  },0)
  const sum = finalBalance;
  renderBalance.innerText = `R$ ${sum}`
}


allList()
entryList()
exitList()
showForm()
Totalbalance(insertedValues)
render(insertedValues)


