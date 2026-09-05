export async function onRequest(context, next) {
  const { request, url } = context;
  
  // Check for your custom header
  if (request.headers.get('apos-external-front-key')) {
    
    // Forward the request to the other server
    const newUrl = url.toString().replace(':4321', ':3000');
    const proxyResponse = await fetch(newUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      duplex: 'half'
    });
    
    // Return the proxied response
    return proxyResponse;
  }
  
  // Let Astro handle everything else
  return next();
};
