function executar() {
    // ajax
    let pedido = new XMLHttpRequest()

    // response
    pedido.onreadystatechange = function() {
        // check the status of the response
        if (this.readyState == 4 && this.status == 200) {
            // data processing
            let dados = this.responseXML
            let clientes = dados.getElementsByTagName("cliente")
            let conteudo = '<h2>Clientes</h2>'

            for (let i = 0; i < clientes.length; i++) {
                conteudo += '<p>Nombre: ' + clientes[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue + '</p>'
                conteudo += '<p>Contacto: ' + clientes[i].getElementsByTagName("contacto")[0].childNodes[0].nodeValue + '</p>'
                conteudo += '<hr>'
            }

            // defines data presentation
            document.getElementById("box1").innerHTML = conteudo
        }
    }

    // pedido
    pedido.open("GET", "xml.xml", true)
    pedido.send()
}