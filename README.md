# Plants in Smart Buildings

Frontend for an integration of plants in smart buildings.

- [View Demo Site](https://dipro-smart-building.netlify.app/) (preferably on mobile)

## Project Summary

For the module "Digital Project" we created an integration of plants in smart buildings. We worked in an interdisciplinary team of six people. With three people dedicated to design and three people in the development team.

The products of our project were a High-Fidelity Prototype in Figma and a full-stack Web-App. We built our own semantic model of a building using [Brick Schema](https://brickschema.org/) and stored it using [GraphDB](https://graphdb.ontotext.com/). For live sensor data we built a small arduino prototype with different sensors and stored the sonsor data with [InfluxDB](https://www.influxdata.com/). Finally to acces all the data and send it to the frontend we created a NodeJS backend.

The backend is hosted on our university-own [EnterpriseLab](https://eportal.enterpriselab.ch/) and the frontend was deployed on [Netlify](https://www.netlify.com/).

## Quick Links

- [Backend Repository](https://github.com/patriciqa/dipro-smart-gardening-backend)
- [Arduino Repository](https://github.com/domi-b/dipro-smart-buildings-arduino)
- [Figma Prototype](https://www.figma.com/proto/ohBlXQhGunPGbnQFVygLhO/DIPRO---Design-Konzept?node-id=738%3A8435&scaling=scale-down&page-id=609%3A2480&starting-point-node-id=738%3A8435&show-proto-sidebar=1)

## Technology Stack

### Frontend

- [Create React App with TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- [TailwindCSS](https://tailwindcss.com/)

## Run Locally

### Clone Repo

```
git clone https://github.com/gina6/dipro-smart-buildings-frontend.git
```

### Install dependencies

```
npm install
```

### Run App

```
npm start
```
