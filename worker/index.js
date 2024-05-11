const yaml = require("js-yaml");
const links = yaml.safeLoad(LINKS_YAML);

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.slice(1);

  const link = links.find((link) => link.slugs.includes(pathname));

  if (link) {
    return Response.redirect(link.url, 301);
  } else {
    return new Response("Link not found", { status: 404 });
  }
}
