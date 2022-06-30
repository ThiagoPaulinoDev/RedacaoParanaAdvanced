let pattern = "https://redacao.pr.gov.br/static/js/main*";
let targetUrl = browser.runtime.getURL("main.bff6a12a.chunk.js");

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  console.log("Control C Control V Desbloquado");
  return {
      redirectUrl: targetUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["script"]},
  ["blocking"]
);
