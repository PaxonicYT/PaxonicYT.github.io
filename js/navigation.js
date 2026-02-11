function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(function(s) {
        s.classList.add('d-none');
    });
    document.getElementById(sectionId).classList.remove('d-none');
    // Close mobile menu after navigation
    var navbarContent = document.getElementById('navbarContent');
    if (navbarContent) {
        navbarContent.classList.remove('show');
    }
}

function navigate_farbe() {
    showSection('section-farbe');
}

function navigate_alge() {
    showSection('section-alge');
}

function navigate_megaalge() {
    showSection('section-megaalge');
}

function navigate_about() {
    showSection('section-about');
}

function navigate_development() {
    showSection('section-development');
}

// Fallback navbar toggler (in case Bootstrap JS doesn't load)
document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
        toggler.addEventListener('click', function() {
            var target = document.getElementById('navbarContent');
            if (target) {
                target.classList.toggle('show');
            }
        });
    }
});
