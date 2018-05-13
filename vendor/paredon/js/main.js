let mainf = function() {
  $.ajax("https://www.grindhood.com/docentes-api/top5doc-aux").then(function(
    res
  ) {
    let select = $("#top5");
    res.content.top_docentes.forEach(function(docente) {
      let c = Math.round(docente.puntuacion),
        i = 0,
        list = [];
      while (i < 5) {
        if (i < c) list[i] = '<label class="activeEst ">&#9733</label>';
        else list[i] = '<label class="DesactivadoEs">&#9733</label>';
        i++;
      }
      let option =
        ' <div class="col-12">' +
        '<div class="card">' +
        '<div class="card-body">' +
        '<div class="row justify-content-around justify-content-md-between">' +
        '<div class="col-12 col-sm-6 col-md-4 pt-2 pl-5 pl-md-3 ">' +
        "<h3>" +
        docente.nombres +
        " " +
        docente.apellidos +
        "</h3>" +
        "</div>" +
        '<div class="col-12 col-sm-4 pl-5">' +
        '<div class="input-group ">' +
        list[0] +
        list[1] +
        list[2] +
        list[3] +
        list[4] +
        '<p class="point pl-2">' +
        docente.puntuacion.toFixed(1) +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
      select.append(option);
    });
    select.append(
      '<div class="offset-4 offset-sm-5 col-auto mt-3" >' +
        '<img  class="img-fluid" src="./vendor/paredon/img/logodoc.png" alt="Responsive image" >' +
        "</div>" +
        '<div class="w-100"></div>' +
        '<div class="col-12 col-md-5 offset-md-3 mb-2"  >' +
        '<img  class="img-fluid" src="./vendor/paredon/img/auxi.png">' +
        "</div>"
    );
    res.content.top_auxiliares.forEach(function(docente) {
      let c = Math.round(docente.puntuacion),
        i = 0,
        list = [];
      while (i < 5) {
        if (i < c) list[i] = '<label class="activeEst ">&#9733</label>';
        else list[i] = '<label class="DesactivadoEs">&#9733</label>';
        i++;
      }
      let option =
        ' <div class="col-12">' +
        '<div class="card">' +
        '<div class="card-body">' +
        '<div class="row justify-content-around justify-content-md-between">' +
        '<div class="col-12 col-sm-6 col-md-4 pt-2 pl-5 pl-md-3 ">' +
        "<h3>" +
        docente.nombres +
        " " +
        docente.apellidos +
        "</h3>" +
        "</div>" +
        '<div class="col-12 col-sm-4 pl-5">' +
        '<div class="input-group ">' +
        list[0] +
        list[1] +
        list[2] +
        list[3] +
        list[4] +
        '<p class="point pl-2">' +
        docente.puntuacion.toFixed(1) +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
      select.append(option);
    });
  });
};
$(document).ready(mainf);
