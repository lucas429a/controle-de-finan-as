/* Desenvolva sua lógica aqui */
import { insertedValues} from "./valuesData.js"
import{render,Totalbalance} from "./index.js"

let initialID = 0;
function sumID(){
  return initialID++
}

export function showForm(){
  const btn = document.querySelector(".header__button")
  const modalContainer = document.querySelector("dialog")

  btn.addEventListener("click",function(e){
    e.preventDefault()
  modalContainer.insertAdjacentHTML("afterbegin",`
  <div class = "modal__container">
    <header class="modal__header-container">
      <h3 class="modal__tittle">Registro de valor</h3>
      <button class="modal__button-close">x</button>
    </header>
    <p class="modal__description">Digite o valor e em seguida aperte no botão referente ao tipo do valor</p>
    <p  class="valor">Valor</p>
    <div class="modal__input-container">
      <label for="value">R$</label>
      <input class="modal__input" name="value" type="number" id="value" placeholder="00,00">
    </div>
    <form class="modal__value-container">
     <p class="modal__value-description">Tipo de valor</p>
     <select id="input_priority">
     <option id="entrada" class="option" name="categoryID" value="0">Entrada</option>
     <option id="saida" class="option" name="categoryID" value="1">Saída</option>
     </select>
     <div class="modal__button-container">
       <button class="modal__button-close">cancelar</button>
       <button type="submit" class ="modal__button-value">Inserir valor</button>
     </div>
    </form>
    </div>  
          `)
          modalContainer.showModal();

          
          const extract = (insertedValues)=>{
            const selects = document.querySelector("#input_priority")
            const inputs = document.querySelectorAll(".modal__input")
            const bt = document.querySelector(".modal__button-value")
            
            let categoryOption = 0;
            let newExtract={};
          
              bt.addEventListener("click",function(event){
                event.preventDefault()
            
                inputs.forEach((input)=>{
                  return newExtract[input.name]= parseFloat(input.value);
                });

                if(selects.value == 0){
                  categoryOption =0;
                }else if(selects.value == 1){
                  categoryOption = 1;
                }
   
                newExtract.categoryID = categoryOption;
                newExtract.id = sumID();
                insertedValues.push(newExtract);
                render(insertedValues);
                Totalbalance(insertedValues)
              })
            }
            extract(insertedValues)
            
            const button = document.querySelector(".modal__button-close")
            button.addEventListener("click",function(e){
              e.preventDefault()
              modalContainer.innerHTML = "";
              modalContainer.close();
            })
          }
          
          )}
          



  
