let inpotNameOfProdact = document.getElementById('inpotNameOfProdact'); 
let theBigDiv = document.getElementById('theBigDiv');
 let addProdact =document.getElementById('addProdact');
let inputAddTheprice =document.getElementById('inputAddTheprice');






addProdact.addEventListener('click' , function(){

    let h1 = document.createElement('h1');
     h1.setAttribute('id','nameOfProdact'); 
    h1.innerHTML = inpotNameOfProdact.value; 
   theBigDiv.appendChild(h1);

})


let btnAddTheprice = document.getElementById('btnAddTheprice');




/* btnAddTheprice.addEventListener('click' , function(){

let p = document.createElement("p");
    p.setAttribute('id' , "price");
    p.innerHTML = inputAddTheprice.value;


   theBigDiv.appendChild(p);
    

}) */

  let btn = document.getElementById('btn');
  let btnAddBtn = document.getElementById('btnAddBtn')
  let inputaddbtn = document.getElementById('inputaddbtn');
  let divHavePriceWithBtn = document.getElementById('divHavePriceWithBtn');

  btnAddBtn.addEventListener('click' , function(){

    let btnn = document.createElement('btn');
    btnn.setAttribute('id' , 'btn') 
     btnn.innerHTML = inputaddbtn.value;

     let p = document.createElement("p");
    p.setAttribute('id' , "price");
    p.innerHTML = inputAddTheprice.value;

    let divHavePriceWithBtn = document.createElement('div')
    divHavePriceWithBtn.setAttribute('id' , 'divHavePriceWithBtn')
    divHavePriceWithBtn.appendChild(p);
    divHavePriceWithBtn.appendChild(btnn);
    

    theBigDiv.appendChild(divHavePriceWithBtn)

    
     
 })
 
















let btnAddImg =document.getElementById('btnAddImg');
let inputAddImg = document.getElementById('inputAddImg');

btnAddImg.addEventListener('click' , function(){
    let imgee = document.createElement('img');
    imgee.src = URL.createObjectURL(inputAddImg.files[0]);
    imgee.setAttribute('id' , 'img')

   theBigDiv.appendChild(imgee)
})