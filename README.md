# akd-io

This is the repository of the website of Anders Kjær Damgaard at https://akd.io/.

## Development

The site uses [Next.js](https://nextjs.org/) to easily develop server-rendered react sites.

With Next comes the following commands:

- `npm run dev` - Runs the site in dev mode featuring hot-reloading.
- `npm run build` - Builds the site.
- `npm run start` - Starts a server hosting the build on localhost.

## Deployment

The repository includes `now.json` and `next.config.js` files to configure [Zeit Now](https://zeit.co/now) deployments.
If you have an account set up with [now-cli](https://github.com/zeit/now-cli), you can deploy to your own Zeit Now account with the `now` command.

The repository integrates with the [Now GitHub app](https://zeit.co/github) to deliver continuous deployments with deployments on every pull request, as well as https://akd.io/ automatically reflecting the master branch.

## Contribution

This is my personal site, and I'm not looking for help developing it. If you do find a bug however, and feel like fixing it, I'd be happy to receive pull requests.
