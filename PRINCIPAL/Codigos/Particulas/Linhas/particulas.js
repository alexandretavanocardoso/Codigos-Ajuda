particlesJS('particles-js', {
    particles: {
        color: '#fff', // Cor Bolinha
        shape: 'triangle', // "circle", "edge" or "triangle"
        opacity: 1,
        size: 4, // Tamanha Bolinha
        size_random: true,
        nb: 300, // Quantidade
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff', // Cor da linha
            opacity: 1,
            width: 2, //Tamanho
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 4 // Velocidade
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 300
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove"
                nb: 10 // Quantidade das Juntas
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});