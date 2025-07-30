// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Los Aranceles de Trump 2025: Impacto en las Exportaciones Españolas",
        excerpt: "Análisis del impacto de las nuevas políticas arancelarias de la administración Trump en el comercio internacional español.",
        date: "29 Jul 2025",
        content: "La nueva administración Trump ha implementado aranceles que van desde el 10% al 145% según el país de origen. Para España, esto significa un arancel del 15% para la mayoría de productos exportados a Estados Unidos. Este cambio representa un desafío significativo para nuestras exportaciones, especialmente en sectores como automóviles, productos químicos y maquinaria. Las empresas españolas deben adaptarse rápidamente a esta nueva realidad comercial, diversificando mercados y optimizando su competitividad mediante la implementación de tecnologías avanzadas y automatización de procesos."
    },
    {
        id: 2,
        title: "IA y Automatización: El Futuro de las Exportaciones",
        excerpt: "Cómo la inteligencia artificial está revolucionando los procesos de exportación y comercio internacional.",
        date: "25 Jul 2025",
        content: "La inteligencia artificial está transformando radicalmente el comercio internacional. Las empresas que implementan soluciones de IA pueden reducir costos operativos hasta un 40-60% y mejorar la precisión en forecasting de demanda en un 23%. Desde la automatización de documentación aduanera hasta la optimización de rutas logísticas, la IA permite a las empresas exportadoras ser más competitivas y eficientes. En mi experiencia trabajando con +50 países, he visto cómo las empresas que adoptan estas tecnologías superan consistentemente a sus competidores tradicionales."
    },
    {
        id: 3,
        title: "España Alcanza Record de €384 Mil Millones en Exportaciones 2024",
        excerpt: "Las exportaciones españolas muestran resistencia pese al complejo contexto internacional.",
        date: "20 Jul 2025",
        content: "España ha logrado su segundo mejor año histórico en exportaciones con €384.465 mil millones en 2024, representando un crecimiento del 2.7% en diciembre. Los sectores líderes incluyen bienes de capital (19.5%), alimentos y bebidas (17.5%), productos químicos (16.8%) y automoción (14.1%). El sector automovilístico destacó con un crecimiento del 20.6%. Esta robustez del sector exterior español demuestra la capacidad de adaptación de nuestras empresas, especialmente aquellas que han integrado tecnologías avanzadas y diversificado sus mercados internacionales."
    },
    {
        id: 4,
        title: "Europa vs. Competitividad Global: El Desafío de 2025",
        excerpt: "Análisis de la posición competitiva de Europa en el comercio mundial y las estrategias necesarias.",
        date: "15 Jul 2025",
        content: "Europa enfrenta desafíos significativos en competitividad global, con China liderando con 30.2% de participación en manufactura versus 15% de la UE. Sin embargo, Europa mantiene ventajas en sectores de alta tecnología y servicios avanzados. La clave está en la integración del mercado único, la digitalización y la simplificación regulatoria. Como profesional con experiencia en mercados globales, veo oportunidades enormes para empresas europeas que adopten estrategias digitales y aprovechen las fortalezas del ecosistema industrial europeo."
    },
    {
        id: 5,
        title: "Comercio Global Alcanza Record de $33 Billones en 2024",
        excerpt: "El comercio mundial muestra resistencia pese a tensiones geopolíticas y desafíos económicos.",
        date: "10 Jul 2025",
        content: "El comercio global alcanzó un récord de $33 billones en 2024, impulsado por un crecimiento del 7% en servicios y 2% en bienes. Asia lideró el crecimiento con importaciones del 5.6%, mientras que el comercio Sur-Sur creció un 5%. Esta expansión, pese a las tensiones comerciales, demuestra la resiliencia del sistema comercial global. Para exportadores españoles, esto representa oportunidades en mercados emergentes, especialmente en servicios digitales y productos de alta tecnología donde tenemos ventajas competitivas."
    },
    {
        id: 6,
        title: "Automatización de Procesos de Export: Casos de Éxito",
        excerpt: "Ejemplos prácticos de cómo la automatización mejora la eficiencia en operaciones de exportación.",
        date: "05 Jul 2025",
        content: "La automatización en procesos de exportación no es futuro, es presente. He implementado sistemas que automatizan desde la clasificación arancelaria hasta el seguimiento de envíos, reduciendo tiempos de procesamiento en 65% y errores en documentación en 40%. Herramientas de IA para forecasting de demanda, optimización de rutas y gestión de riesgos están transformando cómo operamos. Las empresas que he asesorado han visto mejoras promedio del 30% en eficiencia operativa y reducción del 25% en costos logísticos."
    },
    {
        id: 7,
        title: "Diversificación de Mercados: Estrategias Post-COVID",
        excerpt: "La importancia de diversificar destinos de exportación en el nuevo contexto económico global.",
        date: "30 Jun 2025",
        content: "La diversificación geográfica se ha vuelto crítica. Mi experiencia en +50 países me ha enseñado que las empresas resilientes son aquellas que no dependen de un solo mercado. ASEAN, América Latina y África emergente ofrecen oportunidades extraordinarias. La clave está en entender las particularidades culturales, regulatorias y comerciales de cada región. Las herramientas de IA me permiten analizar patrones de consumo y tendencias de mercado en tiempo real, facilitando la toma de decisiones estratégicas para la expansión internacional."
    },
    {
        id: 8,
        title: "El Impacto de la Fragmentación Comercial Global",
        excerpt: "Análisis de cómo la reconfiguración de cadenas globales afecta a las estrategias de exportación.",
        date: "25 Jun 2025",
        content: "La fragmentación comercial está redefiniendo el mapa del comercio global. Los acuerdos bilaterales, como el reciente EU-US que establece aranceles del 15%, y la reconfiguración de cadenas de suministro crear nuevas dinámicas. Para exportadores españoles, esto significa oportunidades en nearshoring, especialmente en sectores donde tenemos ventajas comparativas. La automatización y la IA se vuelven herramientas esenciales para navegar esta complejidad creciente y mantener la competitividad en múltiples mercados simultáneamente."
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    // Get DOM elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const postModal = document.getElementById('post-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalText = document.getElementById('modal-text');
    const contactForm = document.getElementById('contact-form');

    console.log('Elements found:', {
        navToggle: !!navToggle,
        navMenu: !!navMenu,
        navLinks: navLinks.length,
        readMoreBtns: readMoreBtns.length,
        postModal: !!postModal,
        contactForm: !!contactForm
    });

    // Initialize all functionality
    initNavigation(navToggle, navMenu, navLinks, navbar);
    initBlogModal(readMoreBtns, postModal, modalClose, modalOverlay, modalTitle, modalDate, modalText);
    initContactForm(contactForm);
    initScrollEffects(navbar, navLinks);
}

// Navigation functionality
function initNavigation(navToggle, navMenu, navLinks, navbar) {
    if (!navToggle || !navMenu || !navLinks.length) {
        console.error('Navigation elements not found');
        return;
    }

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        console.log('Nav toggle clicked');
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Navigation links with smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Nav link clicked:', this.getAttribute('href'));
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                console.log('Scrolling to:', targetPosition);
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                if (navToggle && navMenu) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            } else {
                console.error('Target section not found:', targetId);
            }
        });
    });
}

// Blog modal functionality
function initBlogModal(readMoreBtns, postModal, modalClose, modalOverlay, modalTitle, modalDate, modalText) {
    if (!readMoreBtns.length || !postModal) {
        console.error('Modal elements not found');
        return;
    }

    console.log('Initializing blog modal with', readMoreBtns.length, 'buttons');

    // Add event listeners to read more buttons
    readMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Read more clicked for post', index);
            
            const postIndex = parseInt(this.getAttribute('data-post')) || index;
            showBlogPost(postIndex, postModal, modalTitle, modalDate, modalText);
        });
    });

    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            console.log('Modal close clicked');
            closeBlogModal(postModal);
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            console.log('Modal overlay clicked');
            closeBlogModal(postModal);
        });
    }

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !postModal.classList.contains('hidden')) {
            console.log('Escape key pressed');
            closeBlogModal(postModal);
        }
    });
}

// Show blog post in modal
function showBlogPost(index, postModal, modalTitle, modalDate, modalText) {
    console.log('Showing blog post:', index);
    
    const post = blogPosts[index];
    if (post && modalTitle && modalDate && modalText) {
        modalTitle.textContent = post.title;
        modalDate.textContent = post.date;
        modalText.textContent = post.content;
        
        // Show modal
        postModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        console.log('Modal shown for post:', post.title);
    } else {
        console.error('Post not found or modal elements missing:', index);
    }
}

// Close blog modal
function closeBlogModal(postModal) {
    if (postModal) {
        postModal.classList.add('hidden');
        document.body.style.overflow = '';
        console.log('Modal closed');
    }
}

// Contact form functionality
function initContactForm(contactForm) {
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    console.log('Initializing contact form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Contact form submitted');
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const company = formData.get('company') || '';
        const message = formData.get('message') || '';
        
        console.log('Form data:', { name, email, company, message });
        
        // Validate required fields
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        // Create mailto link
        const subject = encodeURIComponent(`Contacto desde web - ${name}${company ? ` (${company})` : ''}`);
        const body = encodeURIComponent(
            `Hola Òscar,\n\n` +
            `Mi nombre es ${name}${company ? ` y trabajo en ${company}` : ''}.\n\n` +
            `${message}\n\n` +
            `Puedes contactarme en: ${email}\n\n` +
            `Saludos cordiales,\n${name}`
        );
        
        const mailtoLink = `mailto:oscarplamartin@hotmail.com?subject=${subject}&body=${body}`;
        
        console.log('Opening mailto link');
        
        // Try to open default email client
        try {
            window.location.href = mailtoLink;
            showContactConfirmation();
            this.reset();
        } catch (error) {
            console.error('Error opening email client:', error);
            // Fallback: copy email to clipboard
            copyToClipboard(`oscarplamartin@hotmail.com`);
            alert('Se ha copiado el email al portapapeles: oscarplamartin@hotmail.com');
        }
    });
}

// Scroll effects
function initScrollEffects(navbar, navLinks) {
    if (!navbar) {
        console.error('Navbar not found for scroll effects');
        return;
    }

    let ticking = false;

    function updateScrollEffects() {
        updateNavbarStyle(navbar);
        updateActiveNavLink(navLinks, navbar);
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Update navbar style on scroll
function updateNavbarStyle(navbar) {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

// Update active navigation link based on scroll position
function updateActiveNavLink(navLinks, navbar) {
    if (!navLinks || !navbar) return;

    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (scrollPos >= top && scrollPos <= bottom) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to current link
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// Show contact confirmation
function showContactConfirmation() {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.className = 'contact-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <strong>¡Email preparado!</strong>
            <p>Se ha abierto tu cliente de correo. Si no se abre automáticamente, contacta en: oscarplamartin@hotmail.com</p>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        max-width: 350px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation keyframes if not exist
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            .notification-content strong {
                display: block;
                margin-bottom: 4px;
            }
            .notification-content p {
                margin: 0;
                font-size: 14px;
                opacity: 0.9;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Utility function to copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            textArea.remove();
            return Promise.resolve();
        } catch (error) {
            textArea.remove();
            return Promise.reject(error);
        }
    }
}

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});

// Log when page is fully loaded
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    
    // Check if profile image loads correctly
    const profileImg = document.querySelector('.profile-image');
    if (profileImg) {
        profileImg.addEventListener('load', function() {
            console.log('Profile image loaded successfully');
        });
        
        profileImg.addEventListener('error', function() {
            console.error('Profile image failed to load');
            // Set a fallback or placeholder
            this.style.background = 'var(--color-bg-1)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.fontSize = '48px';
            this.style.color = 'var(--color-primary)';
            this.innerHTML = 'ÒP';
        });
    }
});

console.log('App.js loaded successfully');