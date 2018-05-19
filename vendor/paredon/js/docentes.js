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
  let data
  $.ajax('https://www.grindhood.com/docentes-api/doc')
  .then(function(res) {
    data = res.content
    fillData(data)
  })
  $(document).on('click', '.card-aux', function(e) {
    let id = e.currentTarget.id
    localStorage.setItem('id', id)
    localStorage.setItem('type', 'doc')
    location.replace('./home.html')
  })
  $('#searchdoc').keyup(function(e) {
    let text = e.currentTarget.value.toLowerCase()
    let datafiltered = data.filter(function(item) {
      if (item.nombres.toLowerCase().indexOf(text) != -1 || item.apellidos.toLowerCase().indexOf(text) != -1) {
        return true
      }
    })
    fillData(datafiltered)
  })
}
$(document).ready(mainf)
