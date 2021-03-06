let color;

//uses createRows and createCells functions to create a grid
function createGrid(heightCount, widthCount) {
    createRows(heightCount);
    createCells(widthCount);
}

function createRows(heightCount) {
    for (let i = 0; i < heightCount; i++) {
        let $tr = document.createElement('tr');
        document.getElementById('pixelCanvas').appendChild($tr);
    }
}

function createCells(widthCount) {
    let $rows = document.querySelectorAll('tr');
    $rows.forEach(function($row) {
        for (let i = 0; i < widthCount; i++ ) {
            let $td = document.createElement('td');
            //when user clicks on cell change color
            $td.addEventListener('click', function() {
                $td.style.backgroundColor = color;
            });
    
            $row.appendChild($td);
        }
    });
}

//sets color based on user input
(function onColorChange() {
    let $colorInput = document.getElementById('colorPicker');
    $colorInput.addEventListener('change', function() {
        color = $colorInput.value;
    });
})();

(function addSubmitListener(e) { 
    document.getElementById('sizePicker').addEventListener('submit', function(e) {
        e.preventDefault(); //to prevent default submit action
        let heightCount = document.getElementById('inputHeight').value;
        let widthCount = document.getElementById('inputWidth').value;
        
        document.getElementById('pixelCanvas').innerHTML = '';
        createGrid(heightCount, widthCount);
    });
})();