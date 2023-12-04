const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){
        alert("u must write something");
    }

    else{

        // create a list 
        let li = document.createElement("li");

        // list item er majhe input box er value jabe
        li.innerHTML= inputBox.value;

        // list a joma hbe sobgula
        listContainer.appendChild(li);

        // to delete a particular task 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        li.appendChild(span);

    }
    
    // ekta input neyer por searchbox faka hobe
    inputBox.value='';

}


// নিচের এই গুলা কিছু বুঝিনাই
// চেক তো সি এস এস লেখা আছে, বাট এখানে জাভাস্ক্রিপ্ট এ কিভাবে কাজ করছে?

listContainer.addEventListener("click" , function(e){


   if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
       saveData();

   }

   
   
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
       saveData();
   }
   


}


, false )


function saveData() {


    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask() {

    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

