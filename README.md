# Plants in Smart Buildings

Frontend for an integration of plants in smart buildings.

- [View Demo Site](https://dipro-smart-building.netlify.app/) (preferably on mobile)

## Project Summary

For the module "Digital Project" we created an integration of plants in smart buildings. We worked in an interdisciplinary team of six people. With three people dedicated to design and three people in the development team.

The products of our project were a High-Fidelity Prototype in Figma and a full-stack Web-App. We built our own semantic model of a building using [Brick Schema](https://brickschema.org/) and stored it using [GraphDB](https://graphdb.ontotext.com/). For live sensor data we built a small arduino prototype with different sensors and stored the sensor data with [InfluxDB](https://www.influxdata.com/). The notifications that show up on the frontend are stored in a [MySQL](https://www.mysql.com/) Database. Finally to acces all the data and send it to the frontend we created a NodeJS backend.

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

## Images (if backend is down)
![Mobile-Notifications](https://user-images.githubusercontent.com/58468359/203506938-10bea550-822b-4bb4-9b8c-ce41cd7a7d1d.png)

![Mobile-Lexikon-1](https://user-images.githubusercontent.com/58468359/203506838-6f95d7ed-415b-4c09-8aef-e8c87fbeacc2.png)
![Mobile-Lexikon-2](https://user-images.githubusercontent.com/58468359/203506848-5a4c9e72-831e-4b96-ab93-84e3a9fceb94.png)
![Mobile-Lexikon-3](https://user-images.githubusercontent.com/58468359/203506898-c07ffe17-3401-438f-8279-87aaae6eb259.png)
![Mobile-Lexikon-4](https://user-images.githubusercontent.com/58468359/203506917-a2b0c499-a780-4243-8853-44c99e90770f.png)

![Desktop-Lexikon](https://user-images.githubusercontent.com/58468359/203506975-61744da8-e68e-4e97-b17c-4ab683d5bf98.png)
