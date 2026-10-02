# White City Decorating Contractors

Static site for White City Decorating Contractors, the painting and decorating business run by Simon Hewitt from Sandy, Bedfordshire.

## Pages

- Home
- About us
- Services, plus a page for each service
- Gallery of the photos from the Google listing
- Testimonials, with Google reviews copied in full
- Areas covered
- Contact
- Privacy

## Commands

```bash
npm install
npm run dev
npm run build
```

## Before launch

Set the live domain in `astro.config.mjs` (`site`) and in `src/data/site.ts` (`url`). Update the sitemap line in `public/robots.txt` to the same domain. The current value is `https://www.whitecitydecorating.co.uk`.

## Facts used on the site

Name, phone, hours, rating and photos come from the public Google listing. The Sandy address and email come from the public Facebook page. Reviews shown in full are the ones that could be read in full from Google. The listing has 20 five-star reviews. Fifteen of them are linked, not copied, because the full text was not available without a Google sign-in.
