const yaml = require("js-yaml");
console.log("Links : ", LINKS_YAML);
const links = yaml.load(LINKS_YAML);
console.log("Loaded Links : ", links);

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.slice(1);
  console.log("Pathname : ", pathname);

  const link = links.find((link) => link.slugs.includes(pathname));
  console.log("Found Link : ", link);

  if (link) {
    console.log("Redirecting to : ", link.url);
    return Response.redirect(link.url, 301);
  } else {
    console.log("Link not found");
    return new Response("Link not found", { status: 404 });
  }
}
