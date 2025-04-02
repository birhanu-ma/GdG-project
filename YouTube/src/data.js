

export const API_KEY = "AIzaSyDmSj_UNnTPHclVnMx_-QvfjDaF3936NVI";

export  function valueConverter(value){
    if (value>=1000000){
        return( Math.floor(value/1000000)+"M");
    }
    else if(value>=1000){
        return(Math.floor(value/1000)+"M");
    }
    else{
        return value;

    }
       
    
}
