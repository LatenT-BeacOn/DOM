//console.log('button clicking file added');
//search : form submit reloading the page;(again);

// value-> from input Field;
// innerText->from text area


// document.getElementById('btn-login').addEventListener('click',function(event){
//     event.preventDefault();
// //   console.log('login button clicked');


// //get the phone 
// const phoneNum=document.getElementById('phone').value;

// const pinNum=document.getElementById('pin-num').value;
// console.log(phoneNum,pinNum);


// if(phoneNum==='5' && pinNum==='123'){
//   console.loge('Your logged in');

// }

// else {
//     alert('incorrect phone/pin');
// }

// })




document.getElementById('btn-login').addEventListener('click',function(event){
event.preventDefault();

//get phone;
const phoneNum=document.getElementById('phone').value;
const pinNum=document.getElementById('pin-num').value;

if(phoneNum=== '5' && pinNum==='123'){
    console.log('you are logged in');
    window.location.href='home.html';
   
   
    // window.location.href = '';

}
else {
    alert('Wrong pin/phone');
}

});