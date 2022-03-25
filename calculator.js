const num =[10, 5, 30, 25];

let totalSum = num[0];

let totalSub = num[0];

let totalMult = num[0];

let totalDiv = num[0];



function sum(num1,num2){
return num1 + num2;

};

function substract(num1,num2){
    return num1 - num2;
};

function multiply(num1,num2){
    return num1 * num2;
};

function divide(num1,num2){
    return num1 / num2;
};

num.forEach((number,index) => {

    if(index>0){
    
    totalSum=sum(totalSum,number);
    console.log(totalSum);

    totalSub=substract(totalSub,number);
    console.log(totalSub);

    totalDiv=divide(totalDiv,number);
    console.log(totalDiv);

    totalMult=multiply(totalMult,number);
    console.log(totalMult);
    }

    
});
