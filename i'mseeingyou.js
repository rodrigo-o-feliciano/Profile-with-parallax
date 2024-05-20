function detectarDevTools() {
    var devToolsAberto = false;
    var threshold = 160; // Limite de tamanho que geralmente indica que o DevTools está aberto

    function checkDevTools() {
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            if (!devToolsAberto) {
                devToolsAberto = true;
                devToolsDetectado();
            }
        } else {
            devToolsAberto = false;
        }
    }

    function devToolsDetectado() {
        console.log('DevTools foi aberto');
        // Aqui você pode adicionar ações como redirecionar a página ou exibir uma mensagem
        window.location.replace('https://www.google.com/');
    }

    window.addEventListener('resize', checkDevTools);
    checkDevTools();
}

detectarDevTools();

function bloquearSalvarComoECtrlS() {
    document.addEventListener('keydown', function(event) {
        // Verifica se a tecla 'S' foi pressionada junto com a tecla Ctrl ou Command (para MacOS)
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault(); // Impede a ação padrão do navegador
            window.location.replace('https://www.google.com/');;
        }
    });

    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Impede o menu de contexto (clicar com o botão direito), que pode incluir "Salvar como"
        alert('Então você é espertinho?');
    });
}

bloquearSalvarComoECtrlS();
