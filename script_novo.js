document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar'); // Para o estado ativo do hambúrguer

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Adiciona/remove classe na navbar para animar o ícone do hambúrguer
            if (navbar) {
                navbar.classList.toggle('nav-active');
            }
        });
    }

    // Opcional: Fechar o menu ao clicar em um link (para Single Page Apps ou navegação na mesma página)
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (navbar) {
                        navbar.classList.remove('nav-active');
                    }
                }
            });
        });
    }
});