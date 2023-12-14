$(document).ready(
    function() {
        $("#cmd").click(
            function() {
                $("#box").load("jquery-control.txt", function(responseTxt, statusTxt, xhr) {
                    if (statusTxt == "success") {
                        alert("Comunicación correcta.")
                    } else if (statusTxt == "error") {
                        alert("Error: " + xhr.status + ": " + xhr.statusTxt)
                    }
                })
            }
        )
    }
)