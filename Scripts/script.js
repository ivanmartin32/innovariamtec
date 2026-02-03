document.addEventListener('DOMContentLoaded', function () {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.getElementById('main-nav');
            if (!hamburger || !nav) return;

            hamburger.addEventListener('click', function (e) {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', String(!expanded));
                this.classList.toggle('open');
                nav.classList.toggle('open');
            });

            // cerrar al hacer click fuera
            document.addEventListener('click', function (e) {
                if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                    nav.classList.remove('open');
                    hamburger.classList.remove('open');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });

            // cerrar al hacer click en un enlace
            nav.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    nav.classList.remove('open');
                    hamburger.classList.remove('open');
                    hamburger.setAttribute('aria-expanded', 'false');
                });
            });
        });