function submit() {
    let email = document.getElementById("email").value;
    let iconError = document.getElementById("icon-arrow");
    let spanError = document.getElementById("span-error");
    let input = document.getElementById("input-area");
    
    if (email === "") {
        iconError.classList.remove("hidden")
        iconError.classList.add("visible");
        spanError.classList.remove("hidden")
        spanError.classList.add("visible");
        input.classList.add("invalid");
    } else {
        iconError.classList.remove("visible")
        iconError.classList.add("hidden");
        spanError.classList.remove("visible")
        spanError.classList.add("hidden");
        input.classList.remove("invalid");
    }
}