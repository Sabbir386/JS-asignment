 /*JS Project*/
 function mindGame(number){
    if(typeof number!=='number' || number<0 ){
        return 'Input Should be a Positive Number';
    }
    number=(((number*3+10)/2)-5);
    return number;
 }
//   console.log(mindGame(33));

function evenOdd(text){
    if(typeof text!=='string'){
        return 'Input Should be a String';
    }
    const totalLength=text.length;
    return ( (totalLength&1) ? 'odd' : 'even');
    
}
 //console.log(evenOdd('chatgpt'));hhdfhhsdfhsdhfhsdhfjdsgfjsdhfhhdshfgsdhfhsdfhsdfdsfhfh

 function isLGSeven(number){
    if(typeof number!=='number'){
        return 'Input Should be a Number';
    }
    let difference=(number-7);
    return ( difference<0 ? difference : (number*2) );

 }
 console.log(isLGSeven(-15));
 