//Ajax con JSON 

$.get('turismo.json', (response) => {

    console.log(response);
    response.forEach((turis) => {
    $(".contenedorBlog").append(`<li class="sitios list-group-item">
                     <img src=${turis.imagen} width="250" height=""></img>
                     <h4> ${turis.puntoTuristico}</h4>
                     <p> Ubicacion: ${turis.lugar}</p>
                     <p> <strong>costo:</strong><br> ${turis.costo}</p>
                     </li>`);
 
    })
 })

 $(function () {
    $(".turismo").css({
            "display": "flex",
             "background-color": "rosybrown",
             "aling-items": "center",
          });
                            
       });
    
 $(function () {
    $(".contenedorBlog").css({
                "font-size": "18px", 
                "justify-content": "center", 
                "text-align": "center", 
                "flex-flow": "row wrap",
                
                });
                            
    });

    $(function () {
        $(".list-group-item").css({
                    "margin": "20px 30px", 
                    
                    });
                                
        });



        