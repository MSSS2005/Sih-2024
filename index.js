function showContent(sectionId) {
    document.querySelectorAll('#main-content > section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showAbout() {
    showContent('about-us');
}

function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('servicesDropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}
