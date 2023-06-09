
        
   

window.onload= function(){
    drawTable(6,10);
    window.addEventListener("keydown", tasta);
    var l=localStorage.getItem("BuleSparte");
    if(!l){
        localStorage.setItem("BuleSparte",JSON.stringify(0));
    }
    let d=document.getElementById("count");
    d.innerHTML=localStorage.getItem("BuleSparte");

}
function tasta(event){
    switch (event.key) {
        case "b":  
          aleator();
        break;
        case "r":
            infinitt();
        break;
        
        default:
          return;
      }
}
function sterge1(){
    var rows=document.querySelectorAll("tr");
    //console.log(rows[0]);
    rows[0].remove();
    
}
function adauganou(){
    tbl=document.getElementById("container");
    const row = document.createElement("tr");
     
         for (let j = 0; j < 10; j++) {
           const cell = document.createElement("td");
           cell.addEventListener("click",()=>{sparge(5,j)});
           let img=document.createElement("img");
            img.src="bubble0.jpg";
            img.style.width=60+"px";
            cell.appendChild(img);
           row.appendChild(cell);
         }
         tbl.appendChild(row);
}
function reset(){
    sterge1();
    adauganou();
}
function infinitt(){
    setInterval(()=>{reset()},500);
}
function aleator(){
    let i=(Math.floor(Math.random() * 100))%6;
    let j=(Math.floor(Math.random() * 100))%10;
    sparge(i,j);
}
function sparge(i,j){
    
    var rows=document.querySelectorAll("tr");
    var cols=rows[i].childNodes;
    let img=cols[j].childNodes;
    img=img[0];
    img.src="bubble1.jpg";
    localStorage.setItem("BuleSparte",JSON.stringify(JSON.parse(localStorage.getItem("BuleSparte"))+1));
    console.log(localStorage.getItem("BuleSparte"));
    let d=document.getElementById("count");
    d.innerHTML=localStorage.getItem("BuleSparte");

    let aux=(Math.floor(Math.random() * 100))%3;//audio
    if(aux==0){

    }


}
function drawTable(nrows, ncols) {
    
       tbl=document.getElementById("container");
       for (let i = 0; i < nrows; i++) {
         // creates a table row
         const row = document.createElement("tr");
     
         for (let j = 0; j < ncols; j++) {
           const cell = document.createElement("td");
           cell.addEventListener("click",()=>{sparge(i,j)});
           row.appendChild(cell);
         }
         tbl.appendChild(row);
      }
      var rows=document.querySelectorAll("tr");
      for(let i=0;i<rows.length;i++){
         var cols=rows[i].childNodes;
         for(let j=0;j<cols.length;j++){            
            
            let cell=cols[j];
            let img=document.createElement("img");
            img.src="bubble0.jpg";
            img.style.width=60+"px";
            cell.appendChild(img);
            
         }
       }
       
   }