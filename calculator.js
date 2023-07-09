let orignalArray=[]
let newArray=[]
let anotherArray=[]
let actualNumber
let anotherNumber
let operation
let result
const screenReader=document.querySelector('.Screen')
const numericals=document.querySelectorAll('#numerical')
const dot=document.querySelector('#dot')
const functions=document.querySelectorAll('.Button1')
const equal=document.querySelector('.Button2')
const Ac=document.querySelector('.ButtonAc')
const sign=document.querySelector('.Button3')



const getNumber=function retriveNumber(e){
    functions.forEach((fun)=>fun.classList.remove('pressed'))
    if(operation==undefined){
        newArray.forEach((item)=>{if(item=='.'){dot.removeEventListener('click',getNumber)}})
        newArray.push(e.target.textContent);
        actualNumber=newArray.reduce((total,item)=>{return total+item})
        screenReader.textContent=actualNumber
        return actualNumber
    }else{
        dot.addEventListener('click',getNumber)
        anotherArray.forEach((item)=>{if(item=='.'){dot.removeEventListener('click',getNumber)}})
        anotherArray.push(e.target.textContent);
        anotherNumber=anotherArray.reduce((total,item)=>{return total+item})
        screenReader.textContent=anotherNumber
        return anotherNumber
    }
}

const Function=function retriveElement(e){
    if(actualNumber!=undefined){
    functions.forEach((fun)=>fun.classList.remove('pressed'));
    e.target.classList.add('pressed');
    operation=e.target.textContent;
    return operation}

}
const isEqualto=function last(){
    if(result==undefined){
        if(operation=='+') 
            {result=(Number(actualNumber)+Number(anotherNumber))}
        else if(operation=='-')
            {result=(Number(actualNumber)-Number(anotherNumber))}
        else if(operation=='*')
            {result=(Number(actualNumber)*Number(anotherNumber))}
        else if(operation=='/')
            {result=(Number(actualNumber)/Number(anotherNumber))}
        else if(operation=='%')
            {result=(Number(actualNumber)%Number(anotherNumber))}
    
        let resultArray=result.toString().split("")
        console.log(resultArray)
        for (let item in resultArray){
            if(resultArray[item]=='.'){result=result.toFixed(2)}
        }
        screenReader.textContent=result
        while (anotherArray.length>0){
            anotherArray.pop()
        } 
    }else{
        if(operation=='+') 
            {result=(Number(result)+Number(anotherNumber))}
        else if(operation=='-')
            {result=(Number(result)-Number(anotherNumber))}
        else if(operation=='*')
            {result=(Number(result)*Number(anotherNumber))}
        else if(operation=='/')
            {result=(Number(result)/Number(anotherNumber))}
        else if(operation=='%')
            {result=(Number(result)%Number(anotherNumber))}

        let resultArray=result.toString().split("")
        console.log(resultArray)
        for (let item in resultArray){
            if(resultArray[item]=='.'){result=result.toFixed(2)}
        }
        screenReader.textContent=result
        while (anotherArray.length>0){
            anotherArray.pop()
    } 
    }

}
const clearUp=function erase(){
    screenReader.textContent=0;
    result=undefined;
    actualNumber=0;
    anotherNumber=0;
    operation=null;
    while (newArray.length>0){
        newArray.pop()
    }
    while(anotherArray.length>0){
        anotherArray.pop
    }
}

const signChange=function plusMinus(){
    if (screenReader.textContent==actualNumber)
    {actualNumber*=-1}
    else if(screenReader.textContent==anotherNumber)
    {anotherNumber*=-1}
    else if(screenReader.textContent==result)
    {result*=-1}
    screenReader.textContent*=-1;

}

numericals.forEach((numerical)=>{numerical.addEventListener('click',getNumber)})
dot.addEventListener('click',getNumber)
functions.forEach((fun)=>{fun.addEventListener('click',Function)})
equal.addEventListener('click',isEqualto)
Ac.addEventListener('click',clearUp)
sign.addEventListener('click',signChange)

