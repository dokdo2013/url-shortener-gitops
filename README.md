# Simple Serverless URL Shortener with GitOps

URL Shortener GitOps is a serverless URL shortening service built with Cloudflare Workers and managed using the GitOps approach. It allows you to create short, custom URLs that redirect to longer URLs, making them easier to share and remember.

## Features

- Create custom short URLs that redirect to longer URLs
- Manage URL mappings using a YAML file stored in the GitHub repository
- Automatically deploy changes to Cloudflare Workers using GitHub Actions
- Serverless architecture powered by Cloudflare Workers

## Project Structure

```
url-shortener-gitops/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── worker/
│   ├── index.js
│   └── links.yaml
│── package.json
└── package-lock.json
```

- `.github/workflows/deploy.yml`: GitHub Actions workflow file for automatic deployment to Cloudflare Workers.
- `worker/index.js`: Main logic for the URL shortener worker.
- `worker/links.yaml`: YAML file containing the URL mappings.
- `worker/package.json`: Package configuration file for the worker.
- `worker/package-lock.json`: Package lock file for the worker.

## Getting Started

1. Fork this repository to your GitHub account.
2. Set up a Cloudflare Workers account and create a new worker.
3. Configure the necessary secrets in your GitHub repository:
   - `CF_ACCOUNT_ID`: Your Cloudflare account ID.
   - `CF_API_TOKEN`: Your Cloudflare API token with the required permissions.
4. Update the `wrangler.toml` file with your Cloudflare account ID and desired route.
5. Modify the `links.yaml` file to define your custom URL mappings.
6. Push your changes to the `main` branch of your forked repository.
7. GitHub Actions will automatically deploy the changes to your Cloudflare worker.

## Defining URL Mappings

To define URL mappings, edit the `worker/links.yaml` file. Each mapping consists of a URL and an array of slugs that should redirect to that URL. For example:

```yaml
links:
  - url: https://github.com/yourusername
    slugs:
      - gh
      - github
  - url: https://twitter.com/yourusername
    slugs:
      - x
      - twitter
```

In this example, the slugs `gh` and `github` will redirect to `https://github.com/yourusername`, while the slugs `tw` and `twitter` will redirect to `https://twitter.com/yourusername`.

## Deploying Changes

To deploy changes to your URL mappings or worker code, simply push your changes to the `main` branch of your forked repository. GitHub Actions will automatically detect the changes and deploy them to your Cloudflare worker.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
