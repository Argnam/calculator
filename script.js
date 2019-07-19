$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        try {
            let result = math.evaluate($('#display').val())
            $('#display').val(result)
        }
        catch{
            $('#display').val("NaN")
        }
    }
});

$(".buttons button").not('#giveResult').click(function () {
    $('#display').val($('#display').val() + $(this).attr('data'))
});

$('#clear').click(function () {
    $('#display').val('')
})

$("#giveResult").click(function () {

    try {
        let result = math.evaluate($('#display').val())
        $('#display').val(result)
    }
    catch{
        $('#display').val("NaN")
    }


})

let memory = 0
$("#memorySave").click(function () {
    let result = math.evaluate($('#display').val())
    $('#display').val(result)
    memory = result
});

$("#memoryRead").click(function () {
    $('#display').val(memory)
});

$("#memoryClear").click(function () {
    memory = 0
});

$("#memoryPlus").click(function () {
    let result = math.evaluate($('#display').val())
    memory += result
});

$("#memoryMinus").click(function () {
    let result = math.evaluate($('#display').val())
    memory -= result
});



