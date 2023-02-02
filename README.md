## Description

Inventory system that can accomodate product and their stocks quantity for each seller.

## Installation

# install package

-- npm install

# run the migration

- npx sequelize-cli db:migrate

## Setup .env Variables

- PORT=
- LOCAL_HOSTNAME=localhost
- LOCAL_DB_NAME=
- LOCAL_USERNAME=
- LOCAL_PASSWORD=
- LOCAL_PORT=
- JWT_SECRET=
- NODE_ENV=development

## Running the app

```bash
# development
$ npm  start

# watch mode
$ npm run start:dev




## Endpoint

# USER SIGNUP
- URL: /api/users/register
- METHOD: POST
- REQUEST PAYLOAD: {
  {
  "name": "demo",
  "email": "demo@gmail.com",
  "password": "pass123"
}
}
- RESPONSE DATA: {
  "id": "83829719-b03d-4aad-af08-e77b1d5ad762",
  "name": "demo",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzODI5NzE5LWIwM2QtNGFhZC1hZjA4LWU3N2IxZDVhZDc2MiIsImlhdCI6MTY3NTI2OTkwMSwiZXhwIjoxNjc3ODYxOTAxfQ.22HYpSMNkXubJ3uLzEr6uZy8FRgJTvswvnVcSjFbAnQ"
}

# USER LOGIN
- URL: api/users/login
- METHOD: POST
- REQUEST PAYLOAD: {
  "email": "default01@gmail.com",
  "password": "pass123"
}
- RESPONSE DATA: {
  "id": "83829719-b03d-4aad-af08-e77b1d5ad762",
  "name": "demo",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzODI5NzE5LWIwM2QtNGFhZC1hZjA4LWU3N2IxZDVhZDc2MiIsImlhdCI6MTY3NTI4MjQ1MSwiZXhwIjoxNjc3ODc0NDUxfQ.O4lT3e_KSa-OxO1CElOdtOM7xgG9a0uxOmRjehFfbpE"
}


# ADD PRODUCT
 - URL api/products
 - METHOD: POST
 - REQUIRED AUTH TOKEN
 - PAYLOAD SAMPLE:{
  "name": "Mate",
  "description": "Mate view Trade",
  "image": ""
}
- RESPONSE SAMPLE: {
  "id": "ab36bab4-f065-4c58-8e8a-ac3f5ed96da7",
  "userId": "83829719-b03d-4aad-af08-e77b1d5ad762",
  "name": "movie",
  "description": "shanty town",
  "image": "uploads/1675285666882--Screenshot 2022-11-11 at 21.17.48.png",
  "softDelete": false,
  "updatedAt": "2023-02-01T21:07:46.910Z",
  "createdAt": "2023-02-01T21:07:46.910Z",
  "deletedAt": null
}

# FETCH ALL PRODUCTS
- URL: api/products
- METHOD: GET
- REQUIRED AUTH TOKEN: YES
- RESPONSE SAMPLE:[
  {
    "id": "fc885982-7411-4cea-b76e-010dce87bed7",
    "userId": "83829719-b03d-4aad-af08-e77b1d5ad762",
    "name": "Spark VR",
    "description": "Welcome Home",
    "softDelete": false,
    "createdAt": "2023-02-01T20:16:57.187Z",
    "updatedAt": "2023-02-01T20:16:57.187Z",
    "deletedAt": null
  },
  {
    "id": "5f2067fa-cae9-448d-893c-92247b47d232",
    "userId": "83829719-b03d-4aad-af08-e77b1d5ad762",
    "name": "Mate",
    "description": "Mate view Trade",
    "softDelete": false,
    "createdAt": "2023-02-01T20:17:47.594Z",
    "updatedAt": "2023-02-01T20:17:47.594Z",
    "deletedAt": null
  }
]


# GET ALL STOCKS
- URL: api/stocks
- METHOD: GET
- REQUIRED AUTH TOKEN : YES
- SAMPLE RESPONSE: [
  {
    "id": "f6f98a73-5042-42a4-920f-c6171c7ad99f",
    "batchId": "af8cc7b8-abcd-4370-8cb0-038a6b24960d",
    "productId": "fc885982-7411-4cea-b76e-010dce87bed7",
    "quantity": 750,
    "softDelete": false,
    "createdAt": "2023-02-01T20:33:23.637Z",
    "updatedAt": "2023-02-01T20:45:51.157Z",
    "deletedAt": null
  },
  {
    "id": "28c6a0a9-dfd0-41b1-9a1c-80f9ab0663cc",
    "batchId": "834e719f-bc74-4405-a93a-0521cf400dde",
    "productId": "5f2067fa-cae9-448d-893c-92247b47d232",
    "quantity": 500,
    "softDelete": false,
    "createdAt": "2023-02-01T20:34:46.152Z",
    "updatedAt": "2023-02-01T20:46:23.755Z",
    "deletedAt": null
  }
]

# ADD STOCKS
 - URL api/stocks
 - METHOD: POST
 - REQUIRED AUTH TOKEN
 - PAYLOAD SAMPLE: {
  "productId": "20c8a99b-3b47-4404-a66a-326d33b19bf8",
  "quantity": 200
}

- RESPONSE SAMPLE: {
  "message": "Product Stocks Added Successfully"
}

```
