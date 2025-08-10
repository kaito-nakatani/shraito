// Enhanced Password Protection System with Better Session Management
(function() {
  'use strict';
  
  // Configuration
  const CORRECT_PASSWORD = 'Haverford';
  const SESSION_KEY = 'wedding_site_authenticated';
  const COOKIE_KEY = 'wedding_auth_token';
  const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 DAYS in milliseconds
  
  // Generate simple token for cookie
  function generateToken() {
    return btoa(CORRECT_PASSWORD + '_' + Date.now()).replace(/[^a-zA-Z0-9]/g, '').substring(0, 20);
  }
  
  // Cookie management functions
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }
  
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  
  // Check if user is already authenticated (localStorage + cookie)
  function isAuthenticated() {
    // Check localStorage first (session-based)
    const authData = localStorage.getItem(SESSION_KEY);
    if (authData) {
      try {
        const { authenticated, timestamp } = JSON.parse(authData);
        const now = new Date().getTime();
        
        // Check if session is still valid
        if (authenticated && (now - timestamp) < SESSION_DURATION) {
          console.log('User authenticated via localStorage');
          return true;
        } else {
          // Session expired, remove from storage
          localStorage.removeItem(SESSION_KEY);
        }
      } catch (e) {
        // Corrupted data, remove it
        localStorage.removeItem(SESSION_KEY);
      }
    }
    
    // Check cookie as fallback (persistent across sessions)
    const cookieToken = getCookie(COOKIE_KEY);
    if (cookieToken) {
      console.log('User authenticated via cookie');
      // Restore to localStorage for this session
      setAuthenticated();
      return true;
    }
    
    console.log('User not authenticated');
    return false;
  }
  
  // Set authentication session and cookie
  function setAuthenticated() {
    const authData = {
      authenticated: true,
      timestamp: new Date().getTime()
    };
    
    // Store in localStorage for session
    localStorage.setItem(SESSION_KEY, JSON.stringify(authData));
    
    // Store in cookie for persistence (30 days)
    const token = generateToken();
    setCookie(COOKIE_KEY, token, 30);
    
    console.log('User authentication set');
  }
  
  // Clear authentication
  function clearAuthentication() {
    localStorage.removeItem(SESSION_KEY);
    deleteCookie(COOKIE_KEY);
    console.log('User authentication cleared');
  }
  
  // Show main content and hide password overlay
  function showMainContent() {
    const overlay = document.getElementById('password-overlay');
    const mainContent = document.getElementById('main-content');
    
    if (overlay) {
      overlay.classList.add('password-success');
      setTimeout(() => {
        overlay.style.display = 'none';
        overlay.remove(); // Remove from DOM to prevent re-showing
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
        if (typeof HomepageCarousel !== 'undefined') {
          new HomepageCarousel();
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
    console.log('Initializing password protection...');
    
    // If already authenticated, show content immediately WITHOUT showing password form
    if (isAuthenticated()) {
      console.log('User already authenticated, showing content');
      
      const overlay = document.getElementById('password-overlay');
      if (overlay) {
        overlay.style.display = 'none !important';
        overlay.style.visibility = 'hidden';
        overlay.remove(); // Remove completely from DOM
      }
      
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.style.display = 'block';
        mainContent.style.opacity = '1';
      }
      
      // Initialize homepage carousel if on homepage
      setTimeout(() => {
        if (typeof HomepageCarousel !== 'undefined') {
          new HomepageCarousel();
        }
      }, 100);
      
      return;
    }
    
    console.log('User not authenticated, showing password form');
    
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
  
  // Expose function to clear auth (for debugging/testing)
  window.clearWeddingAuth = clearAuthentication;
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePasswordProtection);
  } else {
    initializePasswordProtection();
  }
  
})();
