# sse-realtime-app

React App in use with Server Side Events (SSE).

Run Node.js server from folder /server:

<code>npm run server</code>

Run front-end react app from folder /client:

<code>npm run start</code>

Just test how realtime (SSE) work.

In terminal write:
<code>
  curl -X POST \
 -H "Content-Type: application/json" \
 -d '{"info": "Siała baba mak", "source": "google.com"}'\
 -s http://localhost:3000/fact
</code>

Back to the page and see the effect.


