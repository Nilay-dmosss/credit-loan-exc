
const loanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const LoanEmi= document.querySelector(".loan_emi");
const LoanPrinciple= document.querySelector(".loan_principle");
const LoanTotal= document.querySelector(".loan_total");
const LoanInterest= document.querySelector(".loan_interest_rate");

const submitBtn= document.querySelector(".calculator-btn");

// function animate(){
//     wave(title)
//     wave(titleshadow);
//     illo.rotate.y += isSpining ? -0.03 : 0;
//     t += tStep;
//     illo.updateRenderGraph();
//     requestAnimationFrame(animate);

// }
// animate();

submitBtn.addEventListener("click", function() {
amount=loanAmount.value;
tenure=loanTenure.value/12/100;//loan rate per year /100=loan percentage

emi=(amount*rate *(1 + rate)**tenure) / ((1+ rate)**tenure-1);
total= emi * tenure; //total amount to be paid inclıding interest
interest= total - amount ;

LoanEmi.innerHTML=Math.floor(emi);
LoanPrinciple.innerHTML=Math.floor(amount);
LoanTotal.innerHTML=Math.floor(total);
LoanInterest.innerHTML=Math.floor(interest);
//
let xValues=["Principle","Interest"];
letyValues=[amount,Math.floor(interest)];
let barColors=["#961251","#000000"];
// pie grafik
new Chart("loanChart",{
    type:"pie",
    data: {
        labels: xValues,
        datasets:[
            {
                backgroundColor: barColors,
                data:yValues,
            }
        ]
    },
    Options:{
        title:{
            display:false
        }
    }
});
});
