document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to the portfolio of Souvik Karfa!");

    // --- Lenis Smooth Scroll & GSAP Integration ---
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // --- GSAP Plugin Registration ---
    // Already done by including the script, but good practice to be explicit
    // gsap.registerPlugin(ScrollTrigger);
    // The above line is not needed if ScrollTrigger is in the same file or loaded before this script.
    // Since we are using the CDN, it's globally available.

    // --- Dynamic Content Generation ---
    const skills = [
        { name: 'HTML', icon: 'file-html' },
        { name: 'CSS', icon: 'file-css' },
        { name: 'JavaScript', icon: 'file-js' },
        { name: 'React', icon: 'atom' },
        { name: 'Node.js', icon: 'cube' },
        { name: 'MongoDB', icon: 'database' },
        { name: 'TailwindCSS', icon: 'tailwind-logo' },
        { name: 'Bootstrap', icon: 'bootstrap-logo' },
        { name: 'PHP', icon: 'php-logo' },
        { name: 'SpringBoot', icon: 'leaf' },
    ];
    const projects = [ { title: 'TinDog - Dog Rescue', description: 'A rescue platform for wounded or mentally ill street dogs, connecting them with our rescue team.', link: 'https://mrkarfa.github.io/Tindog/', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tech: ['HTML', 'CSS'] }, { title: 'EduGrad - Learning Platform', description: 'An affordable online learning platform designed to make education accessible for students.', link: 'https://github.com/Mrkarfa/EduGrad-Online-learning-platform', image: 'https://images.unsplash.com/photo-1503676260728-1c64c1a5f8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tech: ['React', 'Node.js', 'MongoDB'] }, { title: 'Classy-Todo', description: 'A modern, Kanban-style Todo Web Application with a sleek design, built with vanilla JS.', link: 'https://classy-todo.netlify.app/', image: 'https://images.unsplash.com/photo-1522147673589-80c1b48d5d42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tech: ['HTML', 'TailwindCSS', 'JavaScript'] }, { title: 'Hashtag - Digital Marketing', description: 'A complete, responsive website for a digital marketing agency, built with Bootstrap.', link: 'https://mrkarfa.github.io/Hashtag_Website/', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tech: ['HTML', 'CSS', 'Bootstrap'] }, { title: 'TravelPoint', description: 'A travel website concept, showcasing beautiful destinations and travel packages.', link: 'https://github.com/Mrkarfa/TravelPoint', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tech: ['HTML', 'CSS', 'JavaScript'] }, { title: 'Personal Website', description: 'My previous personal portfolio website, showcasing my earlier projects and skills.', link: 'https://mrkarfa.github.io/personal-website/', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tech: ['HTML', 'CSS'] } ];
    const skillsGrid = document.querySelector('.skills-grid');
    const projectsContainer = document.querySelector('.projects-container');

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill-item');
        skillElement.innerHTML = `<i class="ph-light ph-${skill.icon}"></i><span>${skill.name}</span>`;
        skillsGrid.appendChild(skillElement);
    });

    projects.forEach(project => { const card = document.createElement('div'); card.classList.add('project-card', 'glassmorphic'); const techBadges = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join(''); card.innerHTML = `<div class="project-image" style="background-image: url('${project.image}')"></div><div class="project-content"><h3>${project.title}</h3><p>${project.description}</p><div class="project-tech">${techBadges}</div><a href="${project.link}" target="_blank" class="project-link">View Project →</a></div>`; projectsContainer.appendChild(card); });

    // --- GSAP Loading Animation ---
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress-bar');
    const loadingTl = gsap.timeline();
    loadingTl.to(progressBar, { width: '100%', duration: 2.5, ease: 'power3.out' })
      .to(preloader, { opacity: 0, duration: 1, onComplete: () => { preloader.style.display = 'none'; document.body.style.overflow = 'auto'; } })
      .to('header', { opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
      .to('.hero-content', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '<0.2')
      .from('.hero-content h1', { y: 50, filter: 'blur(10px)' }, '<')
      .from('.hero-content .cta-buttons', { y: 50 }, '<0.1');

    // --- Core Animations ---
    gsap.utils.toArray('.glow-orb').forEach(orb => { gsap.to(orb, { y: "random(-50, 50)", x: "random(-50, 50)", duration: "random(5, 10)", ease: "sine.inOut", repeat: -1, yoyo: true }); });
    const profileImage = document.querySelector('.profile-image-container');
    profileImage.addEventListener('mouseenter', () => { gsap.to(profileImage, { y: -10, scale: 1.05, rotation: 2, duration: 0.3, ease: 'power2.out' }); });
    profileImage.addEventListener('mouseleave', () => { gsap.to(profileImage, { y: 0, scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' }); });

    // --- Scroll-Triggered & Responsive Animations ---
    ScrollTrigger.matchMedia({
        "(min-width: 769px)": function() {
            let projectsWrapper = document.querySelector("#projects");
            let projectsCards = gsap.utils.toArray(".project-card");
            gsap.to(projectsCards, { xPercent: -100 * (projectsCards.length - 1), ease: "none", scrollTrigger: { trigger: projectsWrapper, pin: true, scrub: 1, snap: 1 / (projectsCards.length - 1), end: () => "+=" + (projectsContainer.scrollWidth - projectsWrapper.offsetWidth) } });
        },
        "(max-width: 768px)": function() { /* Mobile-specific animations can go here */ }
    });

    // --- General Scroll-Triggered Animations ---
    const aboutTl = gsap.timeline({ scrollTrigger: { trigger: '#about', start: 'top 80%', end: 'top 50%', scrub: 1 } });
    aboutTl.from('.about-left', { autoAlpha: 0, x: -100 }).from('.about-right', { autoAlpha: 0, x: 100 }, '<').from('.skill-item', { autoAlpha: 0, y: 20, stagger: 0.1 }, '-=0.5');

    const contactTl = gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top 80%' } });
    contactTl.from('#contact h2', { autoAlpha: 0, y: 50, duration: 1 })
             .from('#contact form input, #contact form textarea', { autoAlpha: 0, x: -50, stagger: 0.2, duration: 0.8 }, '-=0.5')
             .from('#contact .cta-button', { autoAlpha: 0, scale: 0.5, duration: 0.8 }, '-=0.5')
             .from('.social-links a', { autoAlpha: 0, y: 20, stagger: 0.2 }, '-=0.5');

    gsap.from('footer', { autoAlpha: 0, y: 50, scrollTrigger: { trigger: 'footer', start: 'top 95%' } });

    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); mobileNav.classList.toggle('active'); });
    mobileNavLinks.forEach(link => { link.addEventListener('click', () => { hamburger.classList.remove('active'); mobileNav.classList.remove('active'); }); });
});
