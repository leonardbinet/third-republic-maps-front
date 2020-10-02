# French Third Republic maps

This repository expose [Victor Gay's](https://www.tse-fr.eu/fr/people/victor-gay) work on third republic historical maps.

### Technical aspects

Website coded in React, using Strapi backend as a CMS.
Based on pattern described [here](https://strapi.io/blog/strapi-starter-react-blog).

#### Start server

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop

# Create a .env file containing the API_URL variable
echo 'SKIP_PREFLIGHT_CHECK=true\nREACT_APP_BACKEND_URL="http://localhost:1337' >> .env
```

React server is running here => [http://localhost:3000](http://localhost:3000)
