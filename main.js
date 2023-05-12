$(document).ready(function(){
    const btnHeader = $('header button');
    const btnCancelar = $('form #btn-cancelar')

    btnHeader.click(function(){
        $('form').slideDown()
    })

    btnCancelar.click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImage = $('#endereco-imagem-nova').val();

        const newItem = $('<li style="display: none"></li>');

        $(`<img src="${newImage}" >`)
        .appendTo(newItem);

        $(` <div class="overlay-imagem-link">
                <a href="${newImage}" target="_blank">Ver imagem em tamanho real</a>
            </div>`
        ).appendTo(newItem);

        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1500);

        $('#endereco-imagem-nova').val('')

    })

})

