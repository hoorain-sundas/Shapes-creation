function shape(data){
    var a= document.getElementById("size")
    if (data) {
        if (data == 'square') {
            a = a.className = "square";}
        if (data == 'circle') {
           a = a.className = "circle";}
        if (data == 'rectangle') {
           a = a.className = "rectangle";}
        if (data == 'triangle') {
            a = a.className = "triangle";}
}
}
    // b.style.display = "none";
// }
// function shape3(){
//     var c = document.getElementById("size");
//     c.id = "rectangle"
//     console.log(c);
//     // c.style.display = "none";
// }
// function shape4(){
//     var d = document.getElementById("size");
//     d.id = "triangle";
//     console.log(d);
//     // d.style.display = "none";
// }