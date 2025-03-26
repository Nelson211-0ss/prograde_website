function loadComponents() {
    // Load topbar
    fetch('./topbar.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load topbar');
            return response.text();
        })
        .then(data => {
            document.getElementById('topbar-placeholder').innerHTML = data;
            feather.replace(); // Re-initialize feather icons for the topbar
        })
        .catch(err => console.error('Error loading topbar:', err));
    
    // Load header
    fetch('./header.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            feather.replace(); // Re-initialize feather icons for the header
        })
        .catch(err => console.error('Error loading header:', err));
    
    // Load footer
    fetch('./footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load footer');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            feather.replace(); // Re-initialize feather icons for the footer
        })
        .catch(err => console.error('Error loading footer:', err));
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);
