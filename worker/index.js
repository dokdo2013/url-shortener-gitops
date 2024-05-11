addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const links = require("./links.json");

  const url = new URL(request.url);
  const pathname = url.pathname.slice(1);
  const urlDecodedPathname = decodeURIComponent(pathname);
  console.log("Pathname : ", urlDecodedPathname);

  const link = links.links.find((link) =>
    link.slugs.includes(urlDecodedPathname)
  );
  console.log("Found Link : ", link);

  if (link) {
    console.log("Redirecting to : ", link.url);
    return Response.redirect(link.url, 301);
  } else {
    console.log("Link not found");
    return new Response("Link not found", { status: 404 });
  }
}
