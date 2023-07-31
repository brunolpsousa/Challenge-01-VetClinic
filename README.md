# Challenge #01 - VetClinic

This is a POC microservice for a hypothetical veterinary franchise, intended to be used by all owned clinics for internal client and attendances management.

This project intends to provide the primary technical view of the needs that the client has.

Bruno Sousa - bruno.sousa.pb@compasso.com.br

## mongo-express

A [mongo-express](https://hub.docker.com/_/mongo-express) instance is available under the base URL path, i.e. `http://localhost:8081`.

See `.env.example` to configure the port.

## Swagger

There is a `/docs` route dedicated to Swagger documentation.

<details>
  <summary>

## Routes

  <br>
</summary>

<details>
  <summary>

### 🟢 GET - Get all tutors

  <br>
</summary>

`/tutors`

Returns all tutors in database:

```json
{
  "name": "John Doe",
  "phone": "5500998765432",
  "email": "example@email.com",
  "date_of_birth": "1993-12-12T10:10:00.000Z",
  "zip_code": "617600000",
  "pets": [
    {
      "name": "Lilo",
      "species": "dog",
      "carry": "s",
      "weight": 5,
      "date_of_birth": "1993-12-12T10:10:00.000Z",
      "_id": "64c15d8e4234c0e539203f67"
    }
  ],
  "_id": "64c15d8e4234c0e539203f66",
  "__v": 0
}
```

</details>

<details>
  <summary>

### 🟢 GET - Get pet

  <br>
</summary>

`/pet/:petId/tutor/:tutorId`

##### Path Variables

- petId
- tutorId

Returns a pet with the corresponding id:

```json
{
  "name": "Lilo",
  "species": "dog",
  "carry": "s",
  "weight": 5,
  "date_of_birth": "1993-12-12T10:10:00.000Z",
  "_id": "64c15d8e4234c0e539203f67"
}
```

</details>

<details>
  <summary>

### 🟡 POST - Create tutor

  <br>
</summary>

`/tutor`

Returns the created tutor object:

```json
{
  "name": "John Doe",
  "phone": "5500998765432",
  "email": "example@email.com",
  "date_of_birth": "1993-12-12T10:10:00.000Z",
  "zip_code": "617600000",
  "pets": [
    {
      "name": "Lilo",
      "species": "dog",
      "carry": "s",
      "weight": 5,
      "date_of_birth": "1993-12-12T10:10:00.000Z",
      "_id": "64c164fe4234c0e539203f71"
    }
  ],
  "_id": "64c164fe4234c0e539203f70",
  "__v": 0
}
```

</details>

<details>
  <summary>

### 🟡 POST - Create pet

  <br>
</summary>

`/pet/:tutorId`

##### Path Variables

- tutorId

Returns the created pet:

```json
{
  "name": "Milo",
  "species": "cat",
  "carry": "l",
  "weight": 10,
  "date_of_birth": "1998-06-25T16:40:00.000Z",
  "_id": "64c165db4234c0e539203f75"
}
```

</details>

<details>
  <summary>

### 🔵 PUT - Replace tutor

  <br>
</summary>

`/tutor/:tutorId`

##### Path Variables

- tutorId

Returns the updated tutor object:

```json
{
  "_id": "64c2daa685b51d061b009276",
  "name": "J. Robert Oppenheimer",
  "phone": "0100384789",
  "email": "example@mail.com",
  "date_of_birth": "1904-04-22T00:00:00.000Z",
  "zip_code": "001600000",
  "pets": []
}
```

</details>

<details>
  <summary>

### 🔵 PUT - Replace pet

  <br>
</summary>

`/pet/:petId/tutor/:tutorId`

##### Path Variables

- petId
- tutorId

Returns the updated pet:

```json
{
  "name": "Winsley",
  "species": "worm",
  "carry": "xs",
  "weight": 0.1,
  "date_of_birth": "2021-06-19T00:00:00.000Z",
  "_id": "64c2df9f6ddfbf6c386cf549"
}
```

</details>

<details>
  <summary>

### 🟣 PATCH - Modify tutor

  <br>
</summary>

`/tutor/:tutorId`

##### Path Variables

- tutorId

Returns the updated tutor object:

```json
{
  "_id": "64c164fe4234c0e539203f70",
  "name": "Don Joe",
  "phone": "5500998765432",
  "email": "example@email.com",
  "date_of_birth": "1993-12-12T10:10:00.000Z",
  "zip_code": "617600000",
  "pets": [
    {
      "name": "Lilo",
      "species": "dog",
      "carry": "s",
      "weight": 5,
      "date_of_birth": "1993-12-12T10:10:00.000Z",
      "_id": "64c164fe4234c0e539203f71"
    },
    {
      "name": "Milo",
      "species": "cat",
      "carry": "l",
      "weight": 10,
      "date_of_birth": "1998-06-25T16:40:00.000Z",
      "_id": "64c165db4234c0e539203f75"
    }
  ],
  "__v": 1
}
```

</details>

<details>
  <summary>

### 🟣 PATCH - Modify pet

  <br>
</summary>

`/pet/:petId/tutor/:tutorId`

##### Path Variables

- petId
- tutorId

Returns the updated pet:

```json
{
  "name": "José",
  "species": "Papagaio",
  "carry": "s",
  "weight": 5,
  "date_of_birth": "1993-12-12T10:10:00.000Z",
  "_id": "64c1679b4234c0e539203f7c"
}
```

</details>

<details>
  <summary>

### 🔴 DELETE - Delete tutor

  <br>
</summary>

`/tutor/:tutorId`

##### Path Variables

- tutorId

Returns status code 200

</details>

<details>
  <summary>

### 🔴 DELETE - Delete pet

  <br>
</summary>

`/pet/:petId/tutor/:tutorId`

##### Path Variables

- petId
- tutorId

Returns status code 200

</details>

</details>

---

## How to run

#### Clone the project:

###### HTTPS

```sh
git clone https://github.com/brunolpsousa/Challenge-01-VetClinic.git && cd Challenge-01-VetClinic
```

###### SSH

```sh
git clone git@github.com:brunolpsousa/Challenge-01-VetClinic.git && cd Challenge-01-VetClinic
```

#### Set up the environment:

Create a file named `.env` using `.env.example` as model.

<details> <summary>

###### Suggested values

<br>
</summary>

```sh
# Server
PORT=3000

# Database
DB_HOST=db
DB_PORT=27017
DB_NAME=vetclinic

# Mongo Express
MONGO_EXPRESS_PORT=8081
```

</details>

## Run it:

###### Using make

```sh
make
```

###### Using Docker

```sh
docker-compose up -d
```

## Consume it:

You can use any tool to consume the API, but this repository provides a collection and environment files to be imported by [Postman](https://www.postman.com) or [Hoppscotch](https://hoppscotch.io) for convenience. You can find them inside Postman directory.

## Test it:

This project uses [Vitest](https://vitest.dev) / [supertest](https://github.com/ladjs/supertest) to implement unit and integration testing.

```
make test
```

or

```
docker-compose run --rm api npm run test
```

There is also a test coverage view:

```
make coverage
```

or

```
docker-compose run --rm api npm run coverage
```
