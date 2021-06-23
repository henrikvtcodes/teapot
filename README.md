# `teapot`
## Overview
teapot is a stupid little joke project of mine that I made because I discovered HTTP 418 and thought it was funny. Enjoy, I guess? I will have deployed it on Cloudflare Workers if there is an available URL in the repo description.

## How does it work?
This is an express server written in Typescript. It then uses webpack in order to be compatible with Cloudflare Workers. There are scripts that will allow this to run on NodeJS servers & other V8 environments.


## Usage
How to use this stupid thing, because why not. <br/>
**Root URL:**
### Routes
#### Active
No currently available routes.
#### Inactive
- `GET /`: Just yells that it's a teapot.
- `GET /drinks/list`: Responds with a JSON object describing all of its drinks. Dare you try to order anything other than tea, you will recieve an HTTP `418` code.
- `GET /drinks/:drink`: If its tea, you'll get an image of a tea cup.

## Planned Features
- **Restocking:** The server will have to recieve a `PATCH` or `POST` request with a refill every so often in order to fulfill `GET` requests.