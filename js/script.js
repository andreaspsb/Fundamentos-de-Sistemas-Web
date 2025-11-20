// ========================================
// JavaScript Customizado - Pet Shop
// ========================================

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('Pet Shop - Sistema carregado!');
  
  // Destaca a página ativa no menu de navegação
  highlightActiveNavItem();
  
  // Adiciona animação suave aos links internos
  addSmoothScrolling();
  
  // Adiciona interatividade aos produtos
  addProductInteractions();
});

/**
 * Destaca o item ativo no menu de navegação
 */
function highlightActiveNavItem() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    
    // Verifica se o link corresponde à página atual
    if (currentPath === linkPath || 
        (currentPath.endsWith('/') && currentPath === linkPath + '/') ||
        (linkPath.endsWith('/') && currentPath + '/' === linkPath)) {
      link.style.backgroundColor = 'var(--primary-color, #4a90e2)';
      link.style.color = 'white';
    }
  });
}

/**
 * Adiciona rolagem suave para links âncora
 */
function addSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/**
 * Adiciona interações aos produtos/articles
 */
function addProductInteractions() {
  const articles = document.querySelectorAll('article');
  
  articles.forEach(article => {
    // Adiciona efeito de destaque ao passar o mouse
    article.addEventListener('mouseenter', function() {
      this.style.borderLeft = '4px solid var(--secondary-color, #f39c12)';
    });
    
    article.addEventListener('mouseleave', function() {
      this.style.borderLeft = 'none';
    });
    
    // Adiciona funcionalidade de clique (pode ser expandido futuramente)
    article.addEventListener('click', function() {
      console.log('Produto clicado:', this.querySelector('h3')?.textContent);
    });
  });
}

/**
 * Função auxiliar para formatar valores monetários
 */
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

/**
 * Função para exibir mensagens toast (pode ser usado com Bootstrap)
 */
function showToast(message, type = 'info') {
  // Esta função pode ser expandida para usar os toasts do Bootstrap
  console.log(`[${type.toUpperCase()}] ${message}`);
}
