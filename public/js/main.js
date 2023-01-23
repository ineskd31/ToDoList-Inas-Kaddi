let divList = document.querySelector("#list")

let inputText = document.querySelector("input")

let btnAdd = document.querySelector("#add")

let btnDone = document.querySelector("#done")

let btnToDo = document.querySelector("#todo")

let btnAll = document.querySelector("#all")


console.log(divList);

btnAdd.onclick = function (){
    // si l'input est as vide alors creer un parag
    if (inputText.value != "") {

        let divRow = document.createElement("div")
        divRow.id = "row"
        divRow.classList = "tache"
        divList.appendChild(divRow)
        
        let checkIcon = document.createElement("button")
        checkIcon.classList = "check"
        divRow.appendChild(checkIcon)

        //! barrer le mot quand on apuie sur le bouton check
        checkIcon.addEventListener("click",  () =>{
            if (!para.classList.contains("barrer")) {
                para.classList.add("barrer")

            } else {
                para.classList.remove("barrer")

            }
        })

        
        let para = document.createElement("p")
        para.innerText = inputText.value
        divRow.appendChild(para)

        let divSupModif = document.createElement("div")
        divSupModif.classList = "SupModif"
        divRow.appendChild(divSupModif)
        
        let img1 = document.createElement("img")
        img1.src = "./public/img/iconmonstr-pen-16-32 (1).png"
        divSupModif.appendChild(img1)

        let img2 = document.createElement("img")
        img2.src = "./public/img/iconmonstr-x-mark-circle-lined-32.png"
        divSupModif.appendChild(img2)


        inputText.value = ""
    }
}

btnDone.addEventListener("click", () => {
    let taches = document.getElementsByClassName("tache")
    console.log(taches);
    for (let index = 0; index < taches.length; index++){
        let p = taches[index].firstChild.nextSibling;
        console.log(p);
        if (!p.classList.contains("barrer")) {
            taches[index].classList.add("none");
        }
        else {
            taches[index].classList.remove("none");
        }
        
    }
})

btnToDo.addEventListener("click", () => {
    let taches = document.getElementsByClassName("tache")
    for (let index = 0; index < taches.length; index++){
        let p = taches[index].firstChild.nextSibling;
        if (p.classList.contains("barrer")) {
            taches[index].classList.add("none");
        } else {
            taches[index].classList.remove("none");
        }
    }
})

btnAll.addEventListener("click", () => {
    let taches = document.getElementsByClassName("tache")
    for (let index = 0; index < taches.length; index++){
        taches[index].classList.remove("none");
    }
})
