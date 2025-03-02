function convertInnerTextToNumById (id){
    const innerText = document.getElementById(id).innerText;
    const innerTextToNum = Number(innerText);
    return innerTextToNum;
}