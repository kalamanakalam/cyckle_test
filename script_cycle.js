// first task
function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    
    for(let i = 0; i < 7; i++){
        result[i]=arr[i];
    }

    return result;
}

// second task
function secondTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];


    for(let i = 0; i<5; i++){
       if(typeof(data[i])==='number'){
           data[i]= data[i]*2;
       }else{
           data[i]=data[i]+' - done';
       }
    }
    

    return data;
}

// third task
function thirdTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];


    for(let i = 0; i < 5; i++){
    result[i] = data[4-i];
    }
    
    return result;
}