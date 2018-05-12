var base_URL = 'https://www.grindhood.com/';
function before(){ console.log('beforeOK')}
function success(data){  console.log('success')}
function failed(){ console.log('failed') }


var submit_login = function(){
  $("form[name='form-login']").validate({
        rules: {
            email:{
                required: true,
                email: true
            },
            password:{
                required:true,
                minlength:4
            }
        },

        messages: {
            email: "Por favor ingrese su email",
            password: {
                required: "posr favor ingrese su contrase&#241;a",
                minlength: "Contrase&#241;a incorrecta"
            }
        },

        submitHandler: function(form){
           send_login();
        }
    }); 
}


function send_login(){
  let url  = 'docentes-api/admin/login';
  
  let corr = $('#email').val()
  let pass = $('#password').val()

  let data = {
    correo: corr,
    password: pass
  } 

  $.ajax({
        async:true,
        type:'POST',
        dataType: 'json',
        contentType:'application/x-www-form-urlencoded',
        url:base_URL+url,
        data:data,
        beforeSend: function (){ 
          before();
        },
        success:function(res){
           console.log(res)
           if(res.code ==200){
            localStorage.setItem("nombre", res.content.data.nombres)
            localStorage.setItem("token", res.content.token)
            location.replace('admin.html');
           }else if(res.code!=200){
                 $('#messageLogin').html=res.usrmsg;
           }else {
                 $('#messageLogin').html="Sin conexi&oacute;n";
           }
        },
        timeout:4000,
        error:function(){
          failed();
        }
  });
}




$(function(){
    $("form[name='form-login']").submit(submit_login());
});