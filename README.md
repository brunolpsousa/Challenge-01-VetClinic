# Challenge #01 - VetClinic

## Routes

<details>
  <summary>

### 🟢 GET - Get all tutors

  <br>
</summary>

`http://localhost:3000/tutors`

##### Returns all tutors in database:

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

`http://localhost:3000/pet/:petId/tutor/:tutorId`

#### You must provide petId and tutorId as they are dynamic

### Path Variables

- petId
- tutorId

##### Returns a pet with the corresponding id:

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

`http://localhost:3000/tutor`

##### Returns the created tutor object:

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

`http://localhost:3000/pet/:tutorId`

#### You must provide tutorId as it is dynamic

### Path Variables

- tutorId

##### Returns the created pet:

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

### 🔵 PUT - Update tutor

  <br>
</summary>

`http://localhost:3000/tutor/:tutorId`

#### You must provide tutorId as it is dynamic

### Path Variables

- tutorId

##### Returns the updated tutor object:

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

### 🔵 PUT - Update pet

  <br>
</summary>

`http://localhost:3000/pet/:petId/tutor/:tutorId`

#### You must provide petId and tutorId as they are dynamic

### Path Variables

- petId
- tutorId

##### Returns the updated pet:

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

`http://localhost:3000/tutor/:tutorId`

#### You must provide tutorId as it is dynamic

### Path Variables

- tutorId

##### Returns status code 200

</details>

<details>
  <summary>

### 🔴 DELETE - Delete pet

  <br>
</summary>

`http://localhost:3000/pet/:petId/tutor/:tutorId`

#### You must provide petId and tutorId as they are dynamic

### Path Variables

- petId
- tutorId

##### Returns status code 200

</details>

---

## How to run

### Clone the project:

```sh
git clone https://github.com/brunolpsousa/Challenge-01-VetClinic.git;
cd Challenge-01-VetClinic
```

### Run it:

##### Using make

```sh
make
```

##### Using Docker

```sh
docker-compose up -d
```
