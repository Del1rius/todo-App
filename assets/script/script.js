const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if(inputBox.value === ''){
        alert("You must enter something!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

function sorting() {
    // inputBox.value.sort()
    var array1 = []
    listContainer = array1
    console.log(array1)
    console.log(array1.sort())
}
sorting()

// JavaScript to illustrate sort() function
// function func() {
 
//     // Original string
//     let arr = ["Geeks", "for", "Geeks"]
 
//     console.log(arr);
//     // Sorting the array
//     console.log(arr.sort());
// }
// func();