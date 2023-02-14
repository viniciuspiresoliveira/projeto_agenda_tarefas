$(document).ready(function() {   
    $('form').on('submit', function(e){
        e.preventDefault();
        const imagemTarefaPendente = $('<img src="./images/unfinished task.png" alt="circulo" /> ');
        const novaTarefa = $('<li style="display:none"></li>');
        let nomeDaTarefa = $('#nome-tarefa').val();

        $(imagemTarefaPendente).appendTo(novaTarefa);
        $(novaTarefa).append(nomeDaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(800);
        $('#nome-tarefa').val('');
    })

    $("ul").on("click", "li", function(){
        if($(this).css("text-decoration")=="line-through solid rgb(0, 0, 0)"){
            $(this).css("text-decoration", "none");
            $(this).find('img').attr('src','./images/unfinished task.png');
        } else {
            $(this).css("text-decoration", "line-through");
            $(this).find('img').attr('src','./images/finished task.png');
        }
    });

    $('#botao-limpar').click(function() {
        $('ul').html('');
    })

})

