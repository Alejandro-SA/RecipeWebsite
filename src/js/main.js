function openMenu() {
    document.getElementById("dropDownWrap").classList.toggle("show");
   }
   
   window.onclick = function(event) {
       if (!event.target.matches('.dropdownB')) {
   
           setTimeout(function(){ 
               
           var dropdowns = document.getElementsByClassName("dropDownWrap");
           var i;
           for (i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
               openDropdown.classList.remove('show');
             }
           }
   
            }, 200);
     
         }
       }