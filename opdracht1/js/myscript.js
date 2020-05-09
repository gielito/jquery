$(document).ready(function () {
   
$('#btn1').on('click', function () {
    
var userinput = $('#inputveld').val();
var lengte = userinput.length;
console.log('de input is:'+userinput);
console.log('de lengte is:'+lengte);

if (lengte >= 3){
console.log('het is groter dan 3');
$('input#inputveld').css('border',' 1px solid red');

}
else
{$('input#inputveld').css('border',' 1px solid green');
    }
});
  });