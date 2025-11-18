# Test Messenger - Thumbnail Sharing Test

React app with Open Graph meta tags for testing link sharing thumbnails on Netlify.

## Setup

1. Install dependencies:
```bash
npm install
```

2. For local development, create a `.env` file:
```bash
VITE_SITE_URL=http://localhost:5173
```

## Netlify Deployment

1. Deploy to Netlify (the `netlify.toml` is already configured)
2. The app will automatically use Netlify's `URL` or `DEPLOY_PRIME_URL` environment variable
3. Or set `VITE_SITE_URL` in Netlify's environment variables to your site URL

## Thumbnail Image

- Place your thumbnail image at `public/thumbnail.png`
- Recommended size: 1200x630 pixels
- The image will be accessible at `https://your-site.netlify.app/thumbnail.png`

## Testing Thumbnails

After deployment, test your Open Graph tags:

- **Facebook**: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter**: [Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: [Post Inspector](https://www.linkedin.com/post-inspector/)

Enter your Netlify URL and click "Scrape Again" to see the thumbnail preview.

