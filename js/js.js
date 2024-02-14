/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    sliders[i].onchange = function () {
        var whichSlider = this.getAttribute("id");
        var sliderValue = parseInt(this.value); // Convert slider value to integer
        var newRgb = changeRgb(whichSlider, sliderValue);
        var newCSS = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions */
function changeRgb(channel, value) {
    switch (channel) {
        case "red":
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    return rgb;
}

function writeCSS(newRgb) {
    var newColor = 'rgb(';
    var i = 0;
    while (i < newRgb.length) {
        newColor += newRgb[i];
        if (i < newRgb.length - 1) {
            newColor += ',';
        }
        i++;
    }
    newColor += ')';
    return newColor;
}
