// Authentication check for GitHub Pages with popup login
(function() {
    // Skip auth check for static files and white version
    const pathname = window.location.pathname;
    
    if (
        pathname.includes('.') ||  // Skip files like .css, .js, .png etc
        pathname.includes('/white') ||
        pathname.includes('_next') ||
        pathname.includes('favicon')
    ) {
        return;
    }
    
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
    
    // If not authenticated, show login popup
    if (!isAuthenticated) {
        showLoginPopup();
    }
    
    function showLoginPopup() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;
        
        // Create login form
        overlay.innerHTML = `
            <div style="
                background: white;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                width: 100%;
                max-width: 400px;
                margin: 1rem;
            ">
                <h1 style="
                    text-align: center;
                    margin-bottom: 1.5rem;
                    color: #333;
                    font-size: 1.5rem;
                ">FiberLink 登入</h1>
                <form id="popup-login-form">
                    <div style="margin-bottom: 1rem;">
                        <label style="
                            display: block;
                            margin-bottom: 0.5rem;
                            color: #555;
                            font-size: 0.9rem;
                        ">用戶名：</label>
                        <input type="text" id="popup-username" required style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            font-size: 1rem;
                            box-sizing: border-box;
                        ">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="
                            display: block;
                            margin-bottom: 0.5rem;
                            color: #555;
                            font-size: 0.9rem;
                        ">密碼：</label>
                        <input type="password" id="popup-password" required style="
                            width: 100%;
                            padding: 0.75rem;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            font-size: 1rem;
                            box-sizing: border-box;
                        ">
                    </div>
                    <button type="submit" style="
                        width: 100%;
                        padding: 0.75rem;
                        background: #667eea;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        font-size: 1rem;
                        cursor: pointer;
                        transition: background 0.3s;
                    ">登入</button>
                    <div id="popup-error" style="
                        color: #e74c3c;
                        text-align: center;
                        margin-top: 1rem;
                        display: none;
                        font-size: 0.9rem;
                    ">用戶名或密碼錯誤</div>
                </form>
            </div>
        `;
        
        // Add to document
        document.body.appendChild(overlay);
        
        // Focus on username field
        document.getElementById('popup-username').focus();
        
        // Handle form submission
        document.getElementById('popup-login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('popup-username').value;
            const password = document.getElementById('popup-password').value;
            
            if (username === 'hkt' && password === 'hkt-demo') {
                // Set session
                sessionStorage.setItem('authenticated', 'true');
                // Remove overlay
                document.body.removeChild(overlay);
                // Reload page to show content
                window.location.reload();
            } else {
                document.getElementById('popup-error').style.display = 'block';
                // Clear password field
                document.getElementById('popup-password').value = '';
                document.getElementById('popup-password').focus();
            }
        });
        
        // Prevent clicking outside to close (force login)
        overlay.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
})(); 