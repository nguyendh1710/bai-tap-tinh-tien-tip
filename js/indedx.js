function calculateTip() {
    let xPay = document.getElementById("pay").value;
    let bo = document.getElementById("tip-1").value;
    let total = xPay * bo;
    let person = document.getElementById("share-1").value.selected;
    let all = total / person;
    let output = document.getElementById("output-1");
    output.innerHTML = `${"AMOUNT TIP:"}
    ${all}
    ${"PER PERSON."}
    `
    output.classList.remove("hide");
    output.style.color = "red";
}