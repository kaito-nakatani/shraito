// Password Protection System - FIXED FOR ONE-TIME ENTRY
(function() {
    'use strict';
    
    // Configuration
    const CORRECT_PASSWORD = 'Haverford';
    const SESSION_KEY = 'wedding_site_authenticated';
    const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 DAYS in milliseconds (increased)
    
    // Check if user is already authenticated
    function isAuthenticated() {
        const authData = localStorage.getItem(SESSION_KEY);
        if (!authData) return false;
        
        try {
            const { authenticated, timestamp } = JSON.parse(authData);
            const now = new Date().getTime();
            
            // Check if session is still valid AND user was actually authenticated
            if (authenticated && (now - timestamp) < SESSION_DURATION) {
                return true;
            } else {
                // Session expired or invalid, remove from storage
                localStorage.removeItem(SESSION_KEY);
                return false;
            }
        } catch (e) {
            // Corrupted data, remove it
            localStorage.removeItem(SESSION_KEY);
            return false;
        }
    }
    
    // Set authentication session
    function setAuthenticated() {
        const authData = {
            authenticated: true,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(authData));
    }
    
    // Show main content and hide password overlay
    function showMainContent() {
        const overlay = document.getElementById('password-overlay');
        const mainContent = document.getElementById('main-content');
        
        if (overlay) {
            overlay.classList.add('password-success');
            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.remove(); // REMOVE FROM DOM to prevent re-showing
            }, 800);
        }
        
        if (mainContent) {
            setTimeout(() => {
                mainContent.style.display = 'block';
                mainContent.style.opacity = '1';
                // Initialize other scripts after content is shown
                if (typeof initializeCountdown === 'function') {
                    initializeCountdown();
                }
                if (typeof initializeUpdateNotification === 'function') {
                    initializeUpdateNotification();
                }
            }, 400);
        }
    }
    
    // Show error message
    function showError() {
        const errorDiv = document.getElementById('password-error');
        const inputField = document.getElementById('password-input');
        
        if (errorDiv) {
            errorDiv.style.display = 'block';
            setTimeout(() => {
                errorDiv.style.display = 'none';
            }, 3000);
        }
        
        if (inputField) {
            inputField.value = '';
            inputField.focus();
            inputField.style.borderColor = '#d32f2f';
            setTimeout(() => {
                inputField.style.borderColor = '';
            }, 3000);
        }
    }
    
    // Handle password submission
    function handlePasswordSubmit(event) {
        event.preventDefault();
        
        const inputField = document.getElementById('password-input');
        const enteredPassword = inputField.value.trim();
        
        if (enteredPassword === CORRECT_PASSWORD) {
            setAuthenticated();
            showMainContent();
        } else {
            showError();
        }
    }
    
    // Initialize password protection
    function initializePasswordProtection() {
        // If already authenticated, show content immediately WITHOUT showing password form
        if (isAuthenticated()) {
            const overlay = document.getElementById('password-overlay');
            if (overlay) {
                overlay.style.display = 'none';
            }
            
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.style.display = 'block';
                mainContent.style.opacity = '1';
            }
            return;
        }
        
        // Only show password form if NOT authenticated
        const overlay = document.getElementById('password-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
        }
        
        // Set up form submission
        const form = document.getElementById('password-form');
        const inputField = document.getElementById('password-input');
        
        if (form) {
            form.addEventListener('submit', handlePasswordSubmit);
        }
        
        if (inputField) {
            // Focus on input field
            setTimeout(() => inputField.focus(), 500);
            
            // Handle Enter key
            inputField.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    handlePasswordSubmit(event);
                }
            });
        }
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePasswordProtection);
    } else {
        initializePasswordProtection();
    }
    
})();

// Add this function after the existing code in password-protection.js
function preventPasswordFlash() {
  // If authenticated, immediately hide password overlay
  if (isAuthenticated()) {
    const overlay = document.getElementById('password-overlay');
    if (overlay) {
      overlay.style.display = 'none !important';
      overlay.style.visibility = 'hidden';
      overlay.remove(); // Remove from DOM completely
    }
    
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.display = 'block';
      mainContent.style.opacity = '1';
    }
  }
}

// Call this function immediately when script loads
preventPasswordFlash();

// Also add to the existing initializePasswordProtection function:
function initializePasswordProtection() {
  // If already authenticated, show content immediately WITHOUT showing password form
  if (isAuthenticated()) {
    const overlay = document.getElementById('password-overlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.style.visibility = 'hidden';
      overlay.remove(); // ADDED: Remove completely
    }
    
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.display = 'block';
      mainContent.style.opacity = '1';
    }
    return;
  }
  
  // Rest of existing code...
}
