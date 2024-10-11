document.getElementById('cashOut-btn').addEventListener('click',function(event){
    event.preventDefault();
  const cashOutAmount=document.getElementById('cashOut-amount').value;
  const pinNum=document.getElementById('cashOut-pin').value;
  console.log(cashOutAmount,pinNum);

  if(pinNum==='123'){
 
    const mainBalance=document.getElementById('main-balance').innerText;

    const x=parseFloat(cashOutAmount);
    const y=parseFloat(mainBalance);

    document.getElementById('main-balance').innerText=y-x;
  }
  else{
    alert('Wrong Amount');
  }

});