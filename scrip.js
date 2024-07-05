let son=Math.floor(Math.random()*100+1);

confirm("sizda hozi random sonlar chiqadi");
 alert("sizni random soningiz" +  son );


if(son%22==0){
    alert("fizz")
}else if(son%15==0){
    alert("fizz buzz")
}else if(son%5==0){
    alert("buzz")
}else{  
    alert("ham fizz ham buzz emas")
};