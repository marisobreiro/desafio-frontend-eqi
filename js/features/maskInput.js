$(document).ready(function() {

    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.percent').mask('##0,00%', {reverse: true});

});

$(document).ready(function() {
    $("#field").keyup(function() {
        $("#field").val(this.value.match(/[0-9]*/));
    });
  });