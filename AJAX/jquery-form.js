// submeter o formulário
function submeterFormulario(id_formulario) {
    let frm = $('#' + id_formulario)

    frm.submit(function(e) {
        // impede a submissão tradicional
        e.preventDefault()

        // submissão do formulário em AJAX
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),

            // sucesso
            success: function(i) {
                $("#info").html('Sent with success.')
            },

            // erro
            error: function() {
                $("#info").html('An error occurred.')
            }
        })
    })
}