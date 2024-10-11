document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
  const Amount=document.getElementById('add-amount').value;
  const pinNum=document.getElementById('pin-num').value;
  const  y=document.getElementById('main-balance').innerText;

 // console.log(Amount,pinNum ,y);

if(pinNum==='123'){
    const x=parseFloat(Amount);
    const z=parseFloat(y);
    
  // console.log(x,z);
    const NewBalance=x+z;
   //console.log(NewBalance);

   document.getElementById('main-balance').innerText=NewBalance;



}
else{
    alert('Wrong PIN');
}
});