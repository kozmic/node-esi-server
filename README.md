# node-esi-server

[![Greenkeeper badge](https://badges.greenkeeper.io/kozmic/node-esi-server.svg)](https://greenkeeper.io/)
Express server serving ESI tags to test for edge side inclusion injection (https://gosecure.net/2018/04/03/beyond-xss-edge-side-include-injection/)

Getting started:
```
npm install
node index.js
```

Now try to fetch the page on http://<YOUR-HOST>:8787/ through a proxy to see if the proxy is vulnerable.

