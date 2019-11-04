let i = 0
let b = 0
var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $btn = document.querySelectorAll('td .btn')[b];
const tbody = document.querySelectorAll('tbody tr');
let $btn2 = 0;
let subTo = 0 ;
let subt = 0;
function updateSubtot() {
  // Iteration 1.1
  if (subTo != 0){
    let subt = 0;
    let getNodePu= document.querySelectorAll('.pu #uno')
    let getValuePu=Number(getNodePu[i].value)
  

    let getNodeqty = document.querySelectorAll('#dos')
    let getValueqty = Number(getNodeqty[i].value)
    // let preU = Number(document.querySelectorAll('#uno .pu input').value);
    // var qty = Number(document.querySelectorAll('input[value]').value);
     subt = ` $ ${ getValuePu * getValueqty} `;
    //  document.querySelectorAll('.subtot')[i].innerHTML = subt
    document.querySelectorAll('#tres')[i].innerText = ` ${subt}`
    //  aa.innerHTML = subt
    // console.log(getValuePu)
    // console.log(getValueqty)
    console.log(subt)
    // console.log(selecSpan)

    //  calcAll()
    i++
    
     
    
}
else{
    let subt = 0;
    subTo++
    // var pu = document.querySelector('.pu span').innerText;
    let preU = Number(document.querySelector('.pu span').innerText);
    var qty = Number(document.querySelector('input[value]').value);
    subt = ` $ ${preU * qty} `;
    document.querySelector('.subtot').innerHTML = subt
    console.log('else')
    // console.log(subt)
    // console.log(subTo)
    //  calcAll()
  }

}

function calcAll() {
    // Iteration 1.2
    $btn.innerText = 'Delete'
    $btn2 = $btn
    $btn2.addEventListener('click',deleteD)
    $btn.removeAttribute('class', 'rm')
    $btn.removeEventListener('click', calcAll)
    // $btn.removeAttribute('class', 'create')
    $btn.setAttribute('class', 'btn btn-delete')
    $btn = 0
    

    



    var $tbody = document.querySelector('tbody')
    const trNew = document.createElement('tr')
    trNew.setAttribute('class', 'new')
    $tbody.appendChild(trNew)

    const td1 = document.createElement('td')
    td1.setAttribute('class', name)
    trNew.appendChild(td1)

    const td2 = document.createElement('td')
    td2.setAttribute('class', 'pu')
    trNew.appendChild(td2)

    const td3 = document.createElement('td')
    td3.setAttribute('class', 'qty')
    trNew.appendChild(td3)

    const td4 = document.createElement('td')
    td4.setAttribute('class', 'subtot')
    trNew.appendChild(td4)
    
    const td5 = document.createElement('td')
    td5.setAttribute('class', 'rm')
    trNew.appendChild(td5)

    const input1 = document.createElement('input')
    input1.setAttribute('type', 'text')
    input1.setAttribute('min', '0')
    td1.appendChild(input1)

    const input2 = document.createElement('input')
    input2.setAttribute('type', 'number')
    input2.setAttribute('min', "0")
    input2.setAttribute('class', "pu")
    input2.setAttribute('id','uno' )
    td2.appendChild(input2)

    const input3 = document.createElement('input')
    input3.setAttribute('type', 'number')
    input3.setAttribute('min', '0')
    input3.setAttribute('id','dos')
    td3.appendChild(input3)

    const span1 = document.createElement('span')
    // span1.innerText =  '$0'
     span1.setAttribute('id', 'tres')
    span1.setAttribute('class', 'subtot')
    // span1.setAttribute('id', 'uno')
    td4.appendChild(span1)

    const button = document.createElement('button')
    button.innerText = 'Create'
    button.setAttribute('class', 'btn create')
    //  button.setAttribute('class', 'create')
    td5.appendChild(button)
    b++
    // let $but = document.querySelectorAll('td .btn')[b];
    // $but.addEventListener('click', calcAll)
    $btn = document.querySelectorAll('td .btn')[b]
    $btn.addEventListener('click', calcAll)
    
    }
    function deleteD(e){
       
           const tr = document.querySelectorAll('tbody tr')[0]
           tbody.removeChild(tr);
            
    }

 $calc.addEventListener('click', updateSubtot)
 $btn.addEventListener('click', calcAll)
 