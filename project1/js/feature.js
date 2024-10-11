document.getElementById('btn-cashOut').addEventListener('click',function(){
    //show cashOut form;
    document.getElementById('form-cashOut').classList.remove('hidden');

    //hide add money form;
    document.getElementById('add-moneyForm').classList.add('hidden');
});


document.getElementById('show-addMoneyForm').addEventListener('click',function(){
    //show cashOut form;
    document.getElementById('form-cashOut').classList.add('hidden');

    //hide add money form;
    document.getElementById('add-moneyForm').classList.remove('hidden');
});