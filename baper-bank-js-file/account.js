function getInputValue(fild){
    const inputFild=document.getElementById(fild);
    const inputFildText=inputFild.value ; //input a ki lekhlo eita value dorlam
    const valueNumber=parseFloat(inputFildText); // eita shokhai rupantor korlam
    inputFild.value=''; // input er vitore lekha pore input ta rest kore dilam
    return valueNumber; //
}
// deposit box update 

function updateTotalValue(fildId , amount){
    const totalTag=document.getElementById(fildId);//eita hoitese deposite box er id ta value hisave fild perimetar diya paisi
    const prevousTotalText=totalTag.innerText; //box er innerText ke dorsi
    const prevousTotal=parseFloat(prevousTotalText);//innnerText er man ta ke shokhai rupantor korsi
    const newTotal=prevousTotal + amount; // ager line er je shokha ta paisi oita shte perimater diya je value ta asbe oitar shte plus hobe
    totalTag.innerText=newTotal; //eita duita mile ja plus hoilo ei maan ta set kore dilam 
}
// handler deposit button 
document.getElementById('deposit-button').addEventListener('click', function(){
    console.log('btn clicked')
    const amount=getInputValue('deposit-amount'); //getinputvalue function er maan ta amount variable er modhe rakha hoise
    updateTotalValue('deposit-Box',amount); // eikhne function ta ke call kore argument hisabe id and ager variable er amount maan ta pathanu hoise
    
})