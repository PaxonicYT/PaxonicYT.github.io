function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(function(s) {
        s.classList.add('d-none');
    });
    document.getElementById(sectionId).classList.remove('d-none');
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
