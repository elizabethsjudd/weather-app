# What's My Weather app

[View application](https://weather-app-ebyrne.vercel.app/) or [view reusable components](https://elizabethsjudd.github.io/weather-app/)

This application supports different color modes based on the user's system settings.

## Get started developing

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with a nested [Storybook](https://storybook.js.org/) environment for component development.

First, run the development servers:

* Application: `npm run app:dev`
* Storybook: `npm run components:dev`

Open [http://localhost:3000](http://localhost:3000) and [http://localhost:6006](http://localhost:6006) with your browser to see the respective results.

### Testing

There are multiple types of tests setup with in this repository:

* Linting: `npm run lint` covers both CSS, JavaScript, and JSON
* Accessibility: `npm run components:test` runs automated accessibility scans on each Storybook demo. You can also manually run these scans via the Storybook addon
* Functional: `npm run app:test` runs tests using Playwright on the application

### CI/CD

This repo automatically runs all tests via GitHub Actions when there is a push to the main branch. It is also automatically deployed via [Vercel]((https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)).
