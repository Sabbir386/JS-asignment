/*
The following Function will give an result 
which is 'mindGame number'
*/
 function mindGame(number){
    if(typeof number!=='number' || number<0 ){
        return 'Input Should be a Positive Number';
    }
    number=(((number*3+10)/2)-5);
    return number;
 }

/*
The following Function will give an result
 which is 'even' or 'odd'
*/
function evenOdd(text){
    if(typeof text!=='string'){
        return 'Input Should be a String';
    }
    const totalLength=text.length;
    return ( (totalLength&1) ? 'odd' : 'even' );
    
}

/*
The following Function will give an result 
'which is less than seven or greater than seven'
*/
 function isLGSeven(number){
    if(typeof number!=='number'){
        return 'Input Should be a Number';
    }
    let difference=(number-7);
    return ( difference<0 ? difference : (number*2) );

 }
 
 /* The following Function will give an result
  which 'total number of badData'*/

function findingBadData(array){
    const arrayValidation=Array.isArray(array);
    let elementValidation=true;
    let totalBadData=0;
    for(element of array){  
        if(element<0)totalBadData++;
        let elementType=typeof element;
        if(elementType!=='number'){
            elementValidation=false;
            break;
        }
    }
    if(arrayValidation!=true || elementValidation!=true){
        return 'Input should be an Array and Provide arrayElement Number';
    }
    else{
        return totalBadData;
    }

}

/*The following Function will convert gems to diamond and
 give result total number of diamond which we will get.*/

function gemsToDiamond(friendOneGems,friendTwoGems,friendThreeGems){
    if( typeof friendOneGems!=='number' || typeof friendTwoGems!=='number' || typeof friendThreeGems!=='number'){
        return 'Input Should be a Number';
    }
    const friendOneGemsPower=21;
    const friendTwoGemsPower=32;
    const friendThreeGemsPower=43;
    let friendOneDiamond=friendOneGems*friendOneGemsPower;
    let friendTwoDiamond=friendTwoGems*friendTwoGemsPower;
    let friendThreeDiamond=friendThreeGems*friendThreeGemsPower;
    let totalDiamond=friendOneDiamond+friendTwoDiamond+friendThreeDiamond;
    return ( (totalDiamond<=2000) ? totalDiamond : (totalDiamond-2000) );
}