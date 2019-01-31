function textField(e) {
    let input = e.querySelector(".mds-text-field__input");
    let label = e.querySelector(".mds-text-field__label");

    input.addEventListener("focus", function(e){
            label.classList.add("mds-text-field__label--active");
    });

    input.addEventListener("blur", function(e) {
        if (input.value === "") {
            label.classList.remove("mds-text-field__label--active");
        }
    });
}
window.mds = {
    textField: textField
};