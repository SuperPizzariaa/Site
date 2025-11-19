// Cursor Personalizado
(function() {
    // Cria o elemento para o cursor personalizado
    const customCursor = document.createElement("img");
    customCursor.src = "PizzaCursor.png"; // Ajuste o caminho conforme sua estrutura
    customCursor.classList.add("custom-cursor");
    customCursor.alt = "cursor";
    
    // Adiciona ao body quando o DOM estiver pronto
    if (document.body) {
        document.body.appendChild(customCursor);
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            document.body.appendChild(customCursor);
        });
    }

    // Atualiza a posição do cursor com base no movimento do mouse
    document.addEventListener("mousemove", (event) => {
        // Usa clientX/clientY para posição relativa à viewport
        customCursor.style.left = `${event.clientX}px`;
        customCursor.style.top = `${event.clientY}px`;
    });

    // Adiciona efeito de clique
    document.addEventListener("mousedown", () => {
        customCursor.classList.add("clicking");
    });

    document.addEventListener("mouseup", () => {
        customCursor.classList.remove("clicking");
    });

    // Esconde o cursor quando sai da janela
    document.addEventListener("mouseleave", () => {
        customCursor.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        customCursor.style.opacity = "1";
    });
})();