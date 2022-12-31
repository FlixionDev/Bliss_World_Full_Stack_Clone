var myData = {
    count:[],
    cart:[
        {itemdetails:{},
        count:0},
    ],
}

const myReducer = (storeData = myData , action)=>{
    switch(action.type) {
        case "ADD":{
            return{
                ...storeData,
                count: [...action.payload],
            }
        }
        default:{
            return storeData;
        }
    }
}

export default myReducer;