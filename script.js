const myarr=[1,2,3,4]
let value =myarr.map((a,index)=>{
    console.log(a,index)
    a=a+1
})
/// filter
const myarr2=[3,4,5,6,78,9]

let filter_value=myarr2.filter((value2)=>{
    return value2>5
})
console.log(filter_value)

// reduce
const myarr3 = [1,1,1,1,1,1]

let reduced_value=myarr3.reduce((s1,s2)=>{
    return s1+s2
})
console.log(reduced_value)
/* this reduce method will us a reduced value of the 
arry according to the consitions that we provide in the return vlaue system */
console.log(typeof(reduced_value))