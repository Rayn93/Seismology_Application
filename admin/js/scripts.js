(function($){
    
    $(document).ready(function(){
       
        //select2 plugin initalize
        $('select').select2({
            allowClear: true
        });

        //initalize popups
        $('[data-original-title]').tooltip();                
                
    });
    
})(jQuery);


function makeFileList() {
    var input = document.getElementById("filesToUpload");
    var ul = document.getElementById("fileList");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (var i = 0; i < input.files.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = input.files[i].name;
        ul.appendChild(li);
    }
    if(!ul.hasChildNodes()) {
        var li = document.createElement("li");
        li.innerHTML = 'Nie wybrano żadnego pliku';
        ul.appendChild(li);
    }
}