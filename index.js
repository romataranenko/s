const names = ["John", "Tom", "Tim", "Jack"];
let name = "Bob";

const list = document.querySelector(".list");
const btn = document.getElementById("add-btn");

function showName(name) {
    const li = document.createElement("li");
    li.textContent = name;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.style.display = "none";
    li.appendChild(delBtn);

    li.onclick = () => {
        delBtn.style.display = "inline";
    };

    delBtn.onclick = () => {
        li.remove();
    };

    list.appendChild(li);
}

names.forEach((n) => showName(n));

btn.onclick = () => {
    names.push(name);
    showName(name);
};