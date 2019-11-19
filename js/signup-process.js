
function register(r){
    alert("hello")
    str=""
    for(k of r){
      str+=k.value+" ";
    }
    alert(str)
    $(".loginframe").show(); 
    $(".regframe").hide(); 
    return false;
}


