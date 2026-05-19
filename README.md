This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploying to GoDaddy (Node.js hosting)

This project can be hosted on GoDaddy's Node.js hosting or any server that supports Node 18+. Use these steps:

1. Upload the project files to your GoDaddy Node app (via cPanel, Git, or SFTP).
2. On the server, install dependencies and build:

```bash
npm install --production
npm run build
```

3. Start the production server. The `server.js` provided listens on `process.env.PORT` which GoDaddy will set:

```bash
npm start
```

Notes:
- Ensure the Node version on GoDaddy matches the `next` compatibility (Node 18+ recommended).
- If you prefer a static site and your app doesn't use Next server features heavily, you can consider a static export (`next export`) but the App Router may not be compatible with static export in all cases.
- If your GoDaddy plan only supports static hosting (no Node), deploy the built static files to their static hosting or use a platform like Vercel or Netlify for full Next apps.

### HTTPS and SMS provider setup

- HTTPS: GoDaddy provides SSL certificates for hosted apps. Enable the SSL certificate for your domain in GoDaddy's control panel or upload a certificate (or use Let's Encrypt if your hosting supports it). The project includes `src/middleware.js` which redirects HTTP to HTTPS in production — this works once your host terminates TLS and sets `x-forwarded-proto`.

- SMS (real delivery): The app supports sending SMS via Twilio. To enable real SMS delivery:
	1. Create a Twilio account and a phone number capable of sending SMS.
	2. Set the following environment variables in your GoDaddy app environment or `.env`:
		 - `TWILIO_ACCOUNT_SID`
		 - `TWILIO_AUTH_TOKEN`
		 - `TWILIO_FROM_NUMBER` (your Twilio phone number, e.g. +1...)
	3. The API route at `/api/send-sms` will detect these variables and send SMS via Twilio. If they are not set, the server logs a mock send for development.

Security note: Never check your Twilio credentials into source control. Use environment variables provided by your hosting provider.
