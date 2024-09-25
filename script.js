const bmitext=document.getElementById('bmi')
const desctext=document.getElementById('desc')
const form=document.querySelector('form')

form.addEventListener('submit',onFormSubmit)
form.addEventListener('reset',onFormReset)

function onFormReset(){
    bmitext.textContent=0
    bmitext.className=''
    desctext.textContent='N/A'
}

function onFormSubmit(e)
{
    e.preventDefault();

    const weight=parseFloat(form.wt.value)
    const height=parseFloat(form.ht.value)

    if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0){
        alert('Please enter a valid weight and height')
        return;
    }

    const heightInMeter= height/100
    const bmi= weight/Math.pow(heightInMeter,2)
    const desc=interpretBMI(bmi)

    bmitext.textContent=bmi.toFixed(2)
    bmitext.className=desc
    desctext.innerHTML=`You are <strong>${desc}</strong>`
}

function interpretBMI(bmi)
{
    if(bmi<18.5)
    {
        return"underweight"
    }
    else if(bmi<25){
         return"healthy"
    }
    else if(bmi<30)
    {
        return "overweight"
    }
    else{
        return "obesity"
    }
}