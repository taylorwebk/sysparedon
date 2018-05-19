let fillData = function (data) {
  let list = ''
  data.forEach(function (doc) {
    list += '<div class="col-sm-6 col-md-4 col-lg-3 mb-4">'+
              '<div class="card card-aux bg-light" id="'+doc.id+'">'+
                  '<div class="card-body">'+
                      '<h5 class="card-title"><i class="icono icon-user"></i>'+doc.nombres +' '+doc.apellidos+'</h5>'+
                      '<p class="card-text">'+doc.materias+'</p>'+
                  '</div>'+
                  '<div class="card-footer">'+
                      '<small class="text-muted">'+doc.nroCom+' comentario(s)</small>'+
                  '</div>'+
              '</div>'+
            '</div>'
  })
  $('#lista').html(list)
}
let mainf = function () {
  $.ajax('https://www.grindhood.com/docentes-api/auxi')
  .then(function(res) {
    fillData(res.content)
  })
  $(document).on('click', '.card-aux', function(e) {
    let id = e.currentTarget.id
    localStorage.setItem('id', id)
    localStorage.setItem('type', 'aux')
    location.replace('./home.html')
  })
}
$(document).ready(mainf)
