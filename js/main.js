var arr = []

function print(some_str) {
    console.log(some_str)
};


function summary(arr = Array) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "number") {
            total += arr[i];
        }
    }
    return total
};


function unhide(good) {
    var state = document.getElementById("hidden");
    var some_text = document.getElementById("asideBtnClick");
    state.hidden = false;
    if (good == 'poke') {
        some_text.innerText = 'Here is poke menu'
    } else if (good == 'shawarma') {
        some_text.innerText = 'Here is shawarma menu'
    } else if (good == 'drinks') {
        some_text.innerText = 'Here is drinks menu'
    }
}