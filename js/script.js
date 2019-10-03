const list = document.getElementsByClassName("student-item cf");
const studentnum = 10;
let lastzero = false;

showPage(list, 1);
function showPage(li, pagenum){
   console.log(li)
   if(lastzero){
      document.getElementsByClassName("student-list")[0].removeChild(document.getElementsByClassName("student-list")[0].lastElementChild);
   }
   for(let i = 0; i < list.length; i++){
      list[i].style.display = "none";
   }
   if(li.length > 0){
      for(let i = 0; i < li.length; i++){
         if(i >= (pagenum-1) *studentnum && i < pagenum * studentnum){
            li[i].style.display = "block";
         }
      }
   }
   else{
      lastzero = true;
      let x = document.createElement("h4");
      document.getElementsByClassName("student-list")[0].appendChild(x);
      x.textContent = "No Results"
   }
}

//initial pageination
appendPageLinks(list);

function appendPageLinks(lis){
   let divnew = document.createElement("div");
   console.log(divnew);
   for(let i = 1; i < lis.length/studentnum + 1; i++){
      let x = document.createElement("button");
      divnew.appendChild(x);
      x.textContent = i;
      x.addEventListener("click", ()=>{
         showPage(lis, i);
      });
   }
   document.querySelector(".page").appendChild(divnew);
}

let searchbar = document.createElement("input");
let search = document.createElement("button");
search.addEventListener("click", ()=> {
   let lisnew = [];
   for(let i = 0; i < list.length; i++){
      if(list[i].firstElementChild.firstElementChild.nextElementSibling.textContent.indexOf(searchbar.value) >= 0){
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
      if(list[i].firstElementChild.firstElementChild.nextElementSibling.textContent.indexOf(searchbar.value.toLowerCase()) >= 0){
         lisnew.push(list[i]);
      }
   }
   console.log(lisnew);
   document.querySelector(".page").removeChild(document.querySelector(".page").lastElementChild);
   appendPageLinks(lisnew);
   showPage(lisnew, 1);
});
document.getElementsByClassName("page-header cf")[0].appendChild(searchbar);
document.getElementsByClassName("page-header cf")[0].appendChild(search);
searchbar.textContent = "Search";
search.innerText = "Search";