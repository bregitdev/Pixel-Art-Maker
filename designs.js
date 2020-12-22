
var height, width, color;

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();

   $('#pixelCanvas').html(''); 

    makeGrid(height, width);
    addCellClickListener();
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $('#pixelCanvas'). append('<tr></tr>');
    };

    for(let j = 0; j < width; j++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        $(event.currentTarget).css("background-color", color)
    });
};