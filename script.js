/* ==========================================================================
   AUTOMAÇÃO DE FORMULÁRIO - ALMEIDA LICITAÇÕES E CONTRATOS (RESOLVIDO)
   ========================================================================== */

function executarEnvioDireto(event) {
    event.preventDefault();

    // Código do país (55) + DDD (15) + Número de destino
    var numeroOficial = "5515981188659";

    var nomeInput = document.getElementById('nome').value.trim();
    var emailInput = document.getElementById('email').value.trim();
    var foneInput = document.getElementById('whatsapp').value.trim();
    var msgInput = document.getElementById('mensagem').value.trim();

    var textoMensagem = "*Novo Lead - Website Almeida Licitações*\n\n" +
        "👤 *Nome:* " + nomeInput + "\n" +
        "📧 *E-mail:* " + emailInput + "\n" +
        "📞 *Telefone:* " + foneInput + "\n\n" +
        "💬 *Mensagem:* " + msgInput;

    var textoCodificado = encodeURIComponent(textoMensagem);
    
    // URL Corrigida com a sintaxe correta reconhecida por navegadores modernos
    var urlFinal = "https://whatsapp.com" + numeroOficial + "&text=" + textoCodificado;

    window.location.assign(urlFinal);
}
