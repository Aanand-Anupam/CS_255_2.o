const background_img = {
    "img0": "austria-6934162_1280.jpg",
    "img1": "city-7109073_1280.jpg",
    "img2": "sunset-8064078_1280.jpg"
};

let cnt = 0;
let div1_back = document.querySelector(".parent_div");
function change_background() {
    cnt = (cnt + 1) % 3;
    
    setTimeout(()=>{
        div1_back.style.backgroundImage = `url('${background_img["img" + cnt]}')`;
        
    },2000);
    
    
    div1_back.style.backgroundPosition = "center";
    div1_back.style.backgroundSize = "cover";
}


setInterval(change_background, 2000);


// Calculator logic
function appendToDisplay(value) {
    const display = document.getElementById('calc-display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function deleteDigit() {
    const display = document.getElementById('calc-display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
