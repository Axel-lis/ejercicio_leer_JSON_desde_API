$(document).ready(()=>{
    $('#personas').hide();
    $('#importarJson').click(function(){
           $.ajax({
               type: "GET",   //metodo GET porque OBTIENE la info desde
               url: "https://randomuser.me/api/?results=5", //url de donde va a buscar la info
               dataType: "json" //tipo de retorno
           }).done((data) => {
                   let personas= data.results;
                   $('#personas tbody').empty(); //para que evitar que se concatene mas datos en la tabla

                   $.each(personas, function (indice, persona)
                    {
                     let fila= $('<tr>');
                     fila.append($(`<td>${persona.id.value}</td>`)); 
                     //esta fila se agrega a la tabla en el valor id
                     fila.append($(`<td>${persona.name.first}</td>`)); 
                     //esta fila se agrega a la tabla en el valor name
                     fila.append($(`<td>${persona.name.last}</td>`)); 
                     //esta fila se agrega a la tabla en el valor last name
                     fila.append($(`<td>${persona.dob.age}</td>`)); 
                     $('#personas tbody').append(fila);
                    });
                    $('#personas').show();
                   });
               });
           });
