# apwebchat-vue

A slightly over-engineered web chat client for the
[Archipelago](https://archipelago.gg) multiworld randomizer platform.

## Using

This site is hosted by the developer at https://bclindner.com/misc/apps/apwc/.

if you'd like to install or build it yourself, you'll need
[Node.js](https://nodejs.org/). It's a pretty standard SPA site build process
from there:

```sh
npm install
npm run build
# this is the part where you take what's in dist/ and deploy it to a webserver
# or static site host.
#
# otherwise, you can do this to host it locally:
cd dist
npx http-server
```
