const list = document.getElementsByClassName("student-item cf");
const studentnum = 10;
let lastzero = false;

let nores = document.createElement("h4");
document.getElementsByClassName("student-list")[0].appendChild(nores);
nores.textContent = "No Results";

showPage(list, 1);
//shows page when called using a list of people and the page number
function showPage(li, pagenum){
   //sets all displays to none
   for(let i = 0; i < list.length; i++){
      list[i].style.display = "none";
   }
   //changes displays that we want to show to block display
   if(li.length > 0){
      for(let i = 0; i < li.length; i++){
         if(i >= (pagenum-1) *studentnum && i < pagenum * studentnum){
            li[i].style.display = "block";
         }
      }
   }
   //toggle no results showing
   if(li.length == 0){
      nores.style.display = "block";
   }else{
      nores.style.display = "none";
   }
}


//initial pageination
appendPageLinks(list);

//gets a list and adds buttons according to the length of the list 
function appendPageLinks(lis){
   let divnew = document.createElement("div");
   divnew.className = "pagination";
   console.log(divnew);
   //for loop to create buttons
   for(let i = 1; i < lis.length/studentnum + 1; i++){
      let li1 = document.createElement("li");
      x = document.createElement("button");
      li1.appendChild(x);
      divnew.appendChild(li1);
      x.textContent = i;
      x.addEventListener("click", ()=>{
         showPage(lis, i);
      });
   }
   document.querySelector(".page").appendChild(divnew);
}

//instantiating elements for later use
let div1 = document.createElement("div");
div1.className = "student-search";
let searchbar = document.createElement("input");
let search = document.createElement("button");

//search when clicking button
search.addEventListener("click", ()=> {
   let lisnew = [];
   for(let i = 0; i < list.length; i++){
      if(list[i].querySelector("h3").innerHTML.indexOf(searchbar.value) != -1){
         lisnew.push(list[i]);
      }
   }
   console.log(lisnew);
   document.querySelector(".page").removeChild(document.querySelector(".page").lastElementChild);
   appendPageLinks(lisnew);
   showPage(lisnew, 1);
});
document.addEventListener("keyup", ()=> {
   console.log(searchbar.value);
   let lisnew = [];
   for(let i = 0; i < list.length; i++){
      if(list[i].querySelector("h3").innerHTML.indexOf(searchbar.value) != -1){
         lisnew.push(list[i]);
      }
   }
   console.log(lisnew);
   document.querySelector(".page").removeChild(document.querySelector(".page").lastElementChild);
   appendPageLinks(lisnew);
   showPage(lisnew, 1);
});
//adding elements 
document.getElementsByClassName("page-header cf")[0].appendChild(div1);
div1.appendChild(searchbar);
div1.appendChild(search);
searchbar.innerText = "Search";
search.textContent = "Search";