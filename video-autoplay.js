// Script para forçar autoplay do vídeo da navegação
(function() {
    function initVideo() {
        const video = document.querySelector('.nav-video');
        
        if (video) {
            // Remove todos os atributos de controlo
            video.removeAttribute('controls');
            video.setAttribute('playsinline', '');
            video.setAttribute('muted', '');
            video.setAttribute('autoplay', '');
            video.setAttribute('loop', '');
            
            // Força o vídeo a tocar
            const playVideo = () => {
                video.play().catch(err => {
                    console.log('Autoplay impedido:', err);
                    // Se o autoplay falhar, tenta novamente após interação do utilizador
                    document.addEventListener('click', () => {
                        video.play().catch(e => console.log('Erro ao reproduzir:', e));
                    }, { once: true });
                });
            };
            
            // Tenta tocar quando o vídeo está pronto
            if (video.readyState >= 3) {
                playVideo();
            } else {
                video.addEventListener('loadeddata', playVideo);
            }
            
            // Garante que o vídeo continua em loop
            video.addEventListener('ended', () => {
                video.currentTime = 0;
                video.play();
            });
        }
    }
    
    // Inicia quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVideo);
    } else {
        initVideo();
    }
})();