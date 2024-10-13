function isNumber(value) {
    const regex = /^-?\d+(\.\d+)?$/;
    return regex.test(value);
}

function updatePrice() {
    let fl1 = 0;
    let fl2 = 0;
    let price = 0;
    let prices = getPrices();
    let checkDiv = document.getElementById("checkboxes");
    let selectDiv = document.getElementById("goods_options");

    let radios = document.getElementsByName("pr");
    radios.forEach(function (radio) {
        if (radio.checked) {
            price = prices.g_Types[radio.value];
            //checkbox
            if (
                radio.value === "g_1" ||
                radio.value === "g_2"
            ) {
                checkDiv.style.display = "none";
            } else {
                checkDiv.style.display = "block";
                fl1 = 1;
            }
            //select
            if (radio.value === "g_1" || radio.value === "g_3") {
                selectDiv.style.display = "none";
            } else {
                selectDiv.style.display = "block";
                fl2 = 1;
            }
        }
    });

    // Смотрим какая товарная опция выбрана.
    let s = document.getElementsByName("g_options");
    let select = s[0].value;
    if (select !== undefined && fl2 === 1) {
        price += prices.g_Options[select];
    }

    //смотрим какие товарные свойства выбраны
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let g_Price = prices.g_Properties[checkbox.name];
            if (g_Price !== undefined && fl1 === 1) {
                price += g_Price;
            }
        }
    });

    let res = document.getElementById("result");

    //подсчет цены с учетом количества товара
    let g_amount = document.getElementsByName("amount");
    let m = g_amount[0].value;
    if (isNumber(m)) {
        res.innerHTML = m * price + " рублей";
    } else {
        res.innerHTML = "Некорректный ввод данных";
    }
}

function getPrices() {
    return {
        g_Options: {
            option_1: 0,
            option_2: 10,
            option_3: 5
        },
        g_Properties: {
            property_1: 1,
            property_2: 2,
            property_3: 3
        },
        g_Types: {
            g_1: 80,
            g_2: 67,
            g_3: 30
        }
    };
}


window.addEventListener("DOMContentLoaded", function () {
    // Назначаем обработчик радиокнопок
    let radios = document.getElementsByName("pr");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            updatePrice();
        });
    });

    // Находим select по имени в DOM.
    let sel = document.getElementsByName("g_options");
    let select = sel[0];
    // Назначаем обработчик на изменение select
    select.addEventListener("change", function () {
        updatePrice();
    });

    // Назначаем обработчик чекбоксов
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            updatePrice();
        });
    });

    let am = document.getElementsByName("amount");
    let g_am = am[0];
    // Назначаем обработчик на изменение select
    g_am.addEventListener("change", function () {
        updatePrice();
    });

    updatePrice();
});