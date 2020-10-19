var day = document.querySelector("#currentDay")
var currentDay = moment();
day.textContent = currentDay.format("dddd MMMM Do YYYY");

$(".col-3").click(function () {
    var textCont = $(this).closest(".row").find("textarea")
    var text = $(this).closest(".row").find("textarea").val()
    var divId = $(this).closest(".row").attr("id")
    textCont.append(text)
    saveNote(divId, text)
});

// creating/declaring/defining a function called "saveNote" which will get two paramaters "key" and "value"
var saveNote = function (key, value) {
    localStorage.setItem(key, value);
};

function loadStorage() {
    $('.row').each(function () {
        var divID = this.id;
        value = localStorage.getItem(divID);
        textCont = $("#" + divID).find("textarea");
        textCont.append(value)
    });
}

loadStorage()

// ---the function below finds the 'id' of the 'textarea' tag ( we need that to compare with the current-time)
$('textarea').each(function () {
    textId = this.id
    textAreaId = "#" + textId

    currentTime = currentDay.format("H")
    if (currentTime === textId) {
        var divSect = $(textAreaId)
        $(divSect).addClass("present")
    }
    else if (currentTime > textId) {
        var divSect = $(textAreaId)
        $(divSect).addClass("past")
    }

    else if (currentTime < textId) {
        var divSect = $(textAreaId)
        $(divSect).addClass("future")
    }

});

