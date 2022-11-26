// js practice 
// 22/11/2022


let salaryRange= [0,18200,45000,12000,18000],
    taxRate = [0,0.19,0.325,0.37,0.45],
    startNum = [0,0,5092,29467,51667];

function findRange(salary) {
    for (let i= salaryRange.length; i>=0;i--){
        if(salary>salaryRange[i]){
            const tax =((salary-salaryRange[i])*taxRate[i]+startNum[i]).toFixed(2);
        
        return tax;
        }
    }
}
console.log(findRange(15000))

/*
 use table
*/

const getMyIncomeTax2=(income)=>{
    const taxTable =[
        {min:0, max:18200, tax:0, rate:0 },
        {min:18200, max:37000, tax:0, rate:0.19 },
        {min:37000, max:90000, tax:3572, rate:0.325 },
        {min:9000, max:120000, tax:20797, rate:0.37 },
        {min:12000, max:180000, tax:22311, rate:0.39 },
        {min:18000, max:Number.POSITIVE_INFINITY, tax:54097, rate:0.45 },
    ];

for (let i=0;i<taxTable.length; i++){
    if(income<=taxTable[i].max)
        return (taxTable[i].tax+(income -taxTable[i].min)*taxTable[i].rate);
}
};

console.log(findRange(15000))


// js 最终版本

var TAX_TABLE_2022 =[
    {min:0, max:18200, tax:0, rate:0},
    {min:18200, max:37000, tax:0, rate:0.19},
    {min:50000, max:90000, tax:2131, rate:0.27},
    {min:90000, max:120000, tax:20797, rate:0.325},
    {min:120000, max:180000, tax:22311, rate:0.37},
    {min:180000, max:Number.POSITIVE_INFINITY, tax:54990, rate:0.45},
];

function calculateTax(income, taxTable){
    for(var i=0;i<taxTable.length;i++){
        if(income>min&&income<=max){
            const tax =taxTable[i].tax + (income - taxTable[i].min)*rate

        return tax
        }
    }
}

console.log(findRange(15000))

/**
 * Readable
 * 
 * Mainetainable
 * 
 * Reusable
 * 
 * Solid Principle
 * 
 * 
*/