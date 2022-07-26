let pattern = "https://redacao.pr.gov.br/static/js/main*";
let targetUrl = browser.runtime.getURL("main.89e9ed98.chunk.js");

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  console.log("Control C Control V Desbloqueado");
  return {
      redirectUrl: targetUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["script"]},
  ["blocking"]
);
