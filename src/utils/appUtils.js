export const isPositive = (number)=>{
    return Math.sign(number) === 1 || Math.sign(number) === +0;
}

export const handleOrderChange = (collection,order)=>{
    let s = order.map(orderIndex=>collection[orderIndex]);
    return s;
}

export const insertBetween = (array,index,insertObject)=>{
    let indexStaysTheSame = array.slice(0,index),
    indexChanges = array.slice(index);
    return [...indexStaysTheSame,insertObject,...indexChanges];
}

export const n = ()=>{};
export function isEmpty(string){
    return string.length <= 0;
}

export const arrayToObject = (array)=>{
    let ret = {};
    array.forEach((item,index)=>{
        ret[index] = item;
    })
    return ret;
}

export function isOptionsAllFilled(options,validator){
    return options.some(validator)
}


export function correctOptionValidator(option){
    return option.isValidOption
}

export const isEmptyString = (option)=>isEmpty(option.value);


