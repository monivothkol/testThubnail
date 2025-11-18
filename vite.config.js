import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get site URL from environment variables (Netlify provides URL or DEPLOY_PRIME_URL)
const siteUrl = process.env.VITE_SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://your-app.netlify.app'

// Custom plugin to replace site URL in HTML
const htmlReplacePlugin = () => {
  return {
    name: 'html-replace',
    transformIndexHtml(html) {
      // Replace all instances of <%= siteUrl %> with the actual site URL
      return html.replace(/<%= siteUrl %>/g, siteUrl)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlReplacePlugin()
  ],
})

