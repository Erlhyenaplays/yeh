var speed = prompt("Speed of checker/gen (Recommended 500 for fast pcs, 1000 for slow)")
var zip = prompt("Zipcode (leave blank for default)") + "10008"
function generateCode() {
 var code = "";
 var chars = "0123456789";
 for (var i = 0; i < 19; i++)
   code += chars.charAt(Math.floor(Math.random() * chars.length));
 return code;
}
function main() {  
   document.getElementById("redeem_code_token").value = generateCode();
   document.getElementById("redeem_code_zip-code").value = zip;
   document.getElementById("redeem_code_submit").click();
}

setInterval(function() {
   main();
}, speed);
