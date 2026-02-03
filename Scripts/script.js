document.addEventListener('DOMContentLoaded', function () {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.getElementById('main-nav');
            if (!hamburger || !nav) return;

            function closeAllSubmenus() {
                nav.querySelectorAll('.submenu').forEach(function (s) {
                    s.classList.remove('open');
                });
                nav.querySelectorAll('.submenu-toggle').forEach(function (b) {
                    b.setAttribute('aria-expanded', 'false');
                });
            }

            hamburger.addEventListener('click', function (e) {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', String(!expanded));
                this.classList.toggle('open');
                nav.classList.toggle('open');
                if (!nav.classList.contains('open')) closeAllSubmenus();
            });

            // toggles para submenu
            nav.querySelectorAll('.submenu-toggle').forEach(function (btn) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const submenuId = btn.getAttribute('aria-controls');
                    const submenu = document.getElementById(submenuId);
                    const expanded = btn.getAttribute('aria-expanded') === 'true';
                    btn.setAttribute('aria-expanded', String(!expanded));
                    if (submenu) submenu.classList.toggle('open');
                });
            });

            // cerrar al hacer click fuera
            document.addEventListener('click', function (e) {
                if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                    nav.classList.remove('open');
                    hamburger.classList.remove('open');
                    hamburger.setAttribute('aria-expanded', 'false');
                    closeAllSubmenus();
                }
            });

            // cerrar al hacer click en un enlace
            nav.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    nav.classList.remove('open');
                    hamburger.classList.remove('open');
                    hamburger.setAttribute('aria-expanded', 'false');
                    closeAllSubmenus();
                });
            });

            // cerrar con Esc
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    nav.classList.remove('open');
                    hamburger.classList.remove('open');
                    hamburger.setAttribute('aria-expanded', 'false');
                    closeAllSubmenus();
                }
            });
        });