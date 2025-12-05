// EmailJS Configuration Loader
// This file loads EmailJS configuration from environment variables

// For development with simple HTTP server, we'll use a config object
// In production, you might want to use a build tool or server-side solution

// Default configuration - replace these with your actual values
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'p4rxz09PlkkXEmuEO',
    SERVICE_ID: 'service_yzeh3uo', 
    TEMPLATE_ID: 'template_g57u0ia'
};

// Try to load from environment variables (for development)
// Note: In a simple HTTP server setup, you'll need to manually update these values
// or use a build tool that can inject environment variables
function loadConfig() {
    // For now, return the default config
    // In a more advanced setup, you could:
    // 1. Use a build tool like Webpack/Vite to inject env vars
    // 2. Use a server-side language to read the .env file
    // 3. Use a separate API endpoint to get the config
    
    return EMAILJS_CONFIG;
}

// Export the configuration
window.EMAILJS_CONFIG = loadConfig();