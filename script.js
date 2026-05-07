/* =====================================================
   JAVASCRIPT DO SITE
   Funções simples para interatividade
   ===================================================== */

// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MENU MOBILE =====
    // Pega os elementos do menu
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    // Quando clicar no botão do menu (mobile)
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active'); // Mostra/esconde o menu
    });
    
    // Fecha o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // ===== SCROLL SUAVE =====
    // Faz a página rolar suavemente até a seção clicada
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', // Rolagem suave
                    block: 'start'
                });
            }
        });
    });
    
    // ===== HEADER SCROLL =====
    // Muda o estilo do header ao rolar a página
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // ===== FORMULÁRIO DE CONTATO =====
    // Envia o formulário (atualmente mostra um alerta)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede envio automático
            
            // Aqui você pode adicionar integração com WhatsApp ou backend
            alert('Formulário enviado! Entraremos em contato em breve.');
            this.reset(); // Limpa o formulário
        });
    }
    
    // ===== ANIMAÇÃO AO ROLAR =====
    // Mostra elementos com fade quando aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    
});