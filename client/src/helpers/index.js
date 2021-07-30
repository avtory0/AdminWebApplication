document.addEventListener('DOMContentLoaded', function() {
    
    var btnCheck = document.querySelector('.table_btn');
    btnCheck.addEventListener('click', function(e) {
        var checkbox = document.querySelectorAll('.check') 
        
        for (let i=0; i<checkbox.length; i++) {
            if (checkbox[i].checked===true) 
                checkbox[i].checked=false;
            else checkbox[i].checked=true;
      
    }
})
})