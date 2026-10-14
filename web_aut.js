/* ==========================================================================
   SISTEMA DE CAPTURA - ALMEIDA LICITAÇÕES (COMPATÍVEL INFINITYFREE)
   ========================================================================== */

function executarEnvioDireto(event) {
    event.preventDefault();

    var numDestino = "5515981188659";

    var n = document.getElementById('nome').value.trim();
    var e = document.getElementById('email').value.trim();
    var w = document.getElementById('whatsapp').value.trim();
    var m = document.getElementById('mensagem').value.trim();

    var layoutStr = "*Novo Lead - Website Almeida Licitações*\n\n" +
        "👤 *Nome:* " + n + "\n" +
        "📧 *E-mail:* " + e + "\n" +
        "📞 *Telefone:* " + w + "\n\n" +
        "💬 *Mensagem:* " + m;

    var txtEnc = encodeURIComponent(layoutStr);
    var apiRoute = "https://whatsapp.com" + numDestino + "&text=" + txtEnc;

    window.location.assign(apiRoute);
}
