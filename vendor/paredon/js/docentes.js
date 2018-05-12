
let mainf = function () {
  $.ajax('https://www.grindhood.com/docentes-api/doc')
  .then(function(res) {
    let list = ''
   /*  console.log(res)
    
    $('#listacontenedor').prepend('<div class="mt-4 alert alert-success" role="alert">'+
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
    '<strong>'+res.usrmsg+'</strong></div>') */
    res.content.forEach(function (doc) {
      list += '<div class="col-sm-6 col-md-4 col-lg-3 mb-4">'+
                '<div class="card">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title"><i class="icono icon-user"></i>'+doc.nombres +' '+doc.apellidos+'</h5>'+
                        '<p class="card-text">'+doc.Materias+'</p>'+
                    '</div>'+
                    '<div class="card-footer">'+
                        '<small class="text-muted">'+doc.nroCom+' comentario(s)</small>'+
                    '</div>'+
                '</div>'+
              '</div>'
    })
    $('#lista').html(list)
  })
}
$(document).ready(mainf)

