var base_URL = 'https://www.grindhood.com/';
var materias = null;
var id_materias = [];

function before(){ console.log('before')}
function success(data){  console.log('success')}
function failed(){ console.log('failed') }

  
function loadingSelectMaterias(){
    let url = 'docentes-api/materias';
    $.ajax({
      async:true,
      type:'GET',
      dataType: 'json',
      contentType:'application/x-www-form-urlencoded',
      url: base_URL + url,
      data:'',
      beforeSend: function (){ 
        before();
      },
      success:function(res){
        loadingSelectMateriasSuccess(res);
      },
      timeout:4000,
      error:function(){
        failed();
      }
    });
}
   
function loadingSelectMateriasSuccess(res){
      if(res.code ==200){
        
        let select = $('#inputGroupMaterias')

        materias = res.content;
        materias.forEach(function(materia) {
             let option = "<option value='"+materia.id+"'>"+materia.sigla+"</option>";
             select.append(option);
        });
        
      }else{
        console.log('error loadingSelectMateriasSuccess');
      }
}
  
$('#inputGroupMaterias').change(function(){
    let id = $(this).val()  
    if( parseInt(id) != 0){
      if(id_materias.length==0){
        $('#materiasElegidas').html(''); 
      }
       
        if(id_materias.indexOf(id)==-1){
          $('#materiasElegidas').append('<span>'+ materias[parseInt(id)-1].sigla+ ', </span>');
          id_materias.push(parseInt(id))
        }
      
      
    }
});

$('#inputGroupGrado').change(function(){
  $('#gradoMensaje').html('');
});



$("form[name='form-register-new']").validate({
    rules: {
        nombres:{
            required: true
        },
        apellidos:{
            required:true
        }
    },

    messages: {
        nombres: "Por favor ingrese su nombre",
        apellidos: "por favor ingrese su apellido"
    },

    submitHandler: function(form){
       send_person();
    }
});

function send_person(){

    if(id_materias.length!=0){

      if(parseInt($('#inputGroupGrado').val()) != 0){

        let data ={
            nombres:$('#nombres').val(),
            apellidos:$('#apellidos').val(),
            grado:$('#inputGroupGrado').val(),
            materias:id_materias
        }
console.log(data);
        $.ajax({
            async:true,
            type:'POST',
            dataType: 'json',
            contentType:'application/x-www-form-urlencoded',
            url: base_URL +'docentes-api/admin/docente',
            data:data,
            headers:{
              "Authorization":localStorage.getItem("token")
            },
            beforeSend: function (){ 
              before();
            },
            success:function(res){
              console.log(res)
            },
            timeout:4000,
            error:function(){
              failed();
            }
          });
      }else{
          $('#gradoMensaje').html('Elija grado');
      }

    }else{
      $('#materiasElegidas').html('Elija al menos una materia...');
    }
        
}
$('#btnLimpiar').click(function(){
  $('#nombres').val('');
  $('#apellidos').val('');
  var id_materias = [];
  $('#materiasElegidas').html('');

});


$(function(){
    loadingSelectMaterias();
    // $('form[name="form-register-new"]').submit(function(){
    //   console.log('fomr');
    // });
});
