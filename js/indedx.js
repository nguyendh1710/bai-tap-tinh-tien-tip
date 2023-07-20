function calculateTip() {
    let xPay = document.getElementById("pay").value;
    let bo = document.getElementById("tip-1").value;
    let total = xPay * bo;
    console.log( total);
    let person = document.getElementById("share-1").selected.value;
    let all = total / person;
    console.log(all);
    let output = document.getElementById("output-1");
    output.innerHTML = `${"AMOUNT TIP:"}
    ${all}
    ${"PER PERSON."}
    `
    output.classList.remove("hide");
    output.style.color = "black";
}