// ذخیره کردن تصویر و دکمه در ثابت
const bulbImg = document.getElementById("bulb")
const bulbButton = document.getElementById("bulbButton")

// یه ثابت که باهاش خاموش روشن شدن لامپ رو کنترل میکنیم
let bulbFlag = false


//  یه ایونت روی دکمه ست میکنیم که باهاش دکمه رو خاموش یا روشن میکنیم از طریق تورو یا فالس بودن ثابت bulbflag 
// از طریق تغییر src
// محتوا دکمه هم در هر لحظه تغییر میکنه

bulbButton.addEventListener("click", function () {
    if (bulbFlag) {
        bulbImg.setAttribute("src", "./pics/bulboff.gif")
        bulbButton.innerHTML = "Turn On"
        bulbFlag = false
    } else {
        bulbImg.setAttribute("src", "./pics/bulbon.gif")
        bulbButton.innerHTML = "Turn Off"
        bulbFlag = true
    }
})

