// Authentication check for GitHub Pages
(function() {
    // Skip auth check for static files, login page, and white version
    const pathname = window.location.pathname;
    
    if (
        pathname.includes('.') ||  // Skip files like .css, .js, .png etc
        pathname.includes('login.html') ||
        pathname.includes('/white') ||
        pathname.includes('_next') ||
        pathname.includes('favicon')
    ) {
        return;
    }
    
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
    
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        window.location.href = '/fibralink/login.html';
    }
})(); 