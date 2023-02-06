 /*JS Project*/
 function mindGame(num){
    if(typeof num!=='number' || num<0 ){
        return 'Input Should be a Positive Number';
    }
    num=(((num*3+10)/2)-5);
    return num;
 }
//  console.log(mindGame(3));

function evenOdd(text){
    if(typeof text!=='string'){
        return 'Input Should be a String';
    }
    const totalLength=text.length;
    return ( (totalLength&1) ? 'odd' : 'even');
    
}
// console.log(evenOdd('10101'));