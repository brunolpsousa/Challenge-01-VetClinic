export default {
  openapi: '3.1.0',
  info: {
    title: 'VetClinic API',
    description:
      'This is a POC microservice for a hypothetical veterinary franchise, intended to be used by all owned clinics for internal client and attendances management.<br>This project intends to provide the primary technical view of the needs that the client has.',
    contact: {
      email: 'bruno.sousa.pb@compasso.com.br',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'API',
    },
  ],
  paths: {
    '/tutor': {
      post: {
        summary: 'Create a tutor',
        description: 'This route creates a new tutor',
        tags: ['Tutors'],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Tutor',
              },
              examples: {
                Complete: {
                  value: {
                    name: 'John Doe',
                    phone: '5500998765432',
                    email: 'example@email.com',
                    date_of_birth: '1993-12-22',
                    zip_code: '617600000',
                    pets: {
                      name: 'Lilo',
                      species: 'dog',
                      carry: 's',
                      weight: 5,
                      date_of_birth: '1998/12/22 10:15',
                    },
                  },
                },
                'No Pet': {
                  value: {
                    name: 'John Doe',
                    phone: '5500998765432',
                    email: 'example@email.com',
                    date_of_birth: '12/30/2001 22:45',
                    zip_code: '617600000',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Tutor created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Tutor',
                },
                examples: {
                  Complete: {
                    value: {
                      name: 'John Doe',
                      phone: '5500998765432',
                      email: 'example@email.com',
                      date_of_birth: '1993-12-12T10:10:00.000Z',
                      zip_code: '617600000',
                      pets: [
                        {
                          name: 'Lilo',
                          species: 'dog',
                          carry: 's',
                          weight: 5,
                          date_of_birth: '1998-12-22T10:15:00.000Z',
                          _id: '64c15d8e4234c0e539203f67',
                        },
                      ],
                      _id: '64c15d8e4234c0e539203f66',
                      __v: 0,
                    },
                  },
                  'No Pet': {
                    value: {
                      _id: '64c2daa685b51d061b009276',
                      name: 'J. Robert Oppenheimer',
                      phone: '0100384789',
                      email: 'example@mail.com',
                      date_of_birth: '1904-04-22T00:00:00.000Z',
                      zip_code: '001600000',
                      pets: [],
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                  'Validation error': {
                    value: {
                      error: 'Tutor validation failed: name: must provide name',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/tutors': {
      get: {
        description: 'Get all tutors',
        summary: 'Get all tutors',
        tags: ['Tutors'],
        responses: {
          200: {
            description: 'Tutors received',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Tutor',
                },
                examples: {
                  Tutors: {
                    value: [
                      {
                        name: 'John Doe',
                        phone: '5500998765432',
                        email: 'example@email.com',
                        date_of_birth: '1993-12-12T10:10:00.000Z',
                        zip_code: '617600000',
                        pets: [
                          {
                            name: 'Lilo',
                            species: 'dog',
                            carry: 's',
                            weight: 5,
                            date_of_birth: '1993-12-12T10:10:00.000Z',
                            _id: '64c15d8e4234c0e539203f67',
                          },
                        ],
                        _id: '64c15d8e4234c0e539203f66',
                        __v: 0,
                      },
                      {
                        _id: '64c2daa685b51d061b009276',
                        name: 'J. Robert Oppenheimer',
                        phone: '0100384789',
                        email: 'example@mail.com',
                        date_of_birth: '1904-04-22T00:00:00.000Z',
                        zip_code: '001600000',
                        pets: [],
                      },
                    ],
                  },
                  Empty: {
                    value: [],
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/tutor/{tutorId}': {
      put: {
        summary: 'Replace a tutor',
        description: 'This route replaces a tutor',
        tags: ['Tutors'],
        parameters: [
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor to be replaced',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Tutor',
              },
              examples: {
                Complete: {
                  value: {
                    name: 'Jack Ode',
                    phone: '550023456789',
                    email: 'example@email.com',
                    date_of_birth: '1983-12-22',
                    zip_code: '617600000',
                    pets: {
                      name: 'Lilo',
                      species: 'dog',
                      carry: 's',
                      weight: 5,
                      date_of_birth: '1998/12/22 10:15',
                    },
                  },
                },
                'No Pet': {
                  value: {
                    name: 'John Doe',
                    phone: '5500998765432',
                    email: 'example@email.com',
                    date_of_birth: '12/30/2001 22:45',
                    zip_code: '617600000',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Tutor replaced',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Tutor',
                },
                examples: {
                  Complete: {
                    value: {
                      name: 'Jack Ode',
                      phone: '550023456789',
                      email: 'example@email.com',
                      date_of_birth: '1983-12-22T00:00:00.000Z',
                      zip_code: '617600000',
                      pets: [
                        {
                          name: 'Lilo',
                          species: 'dog',
                          carry: 's',
                          weight: 5,
                          date_of_birth: '1998-12-22T10:15:00.000Z',
                          _id: '64c15d8e4234c0e539203f67',
                        },
                      ],
                      _id: '64c15d8e4234c0e539203f66',
                      __v: 0,
                    },
                  },
                  'No Pet': {
                    value: {
                      _id: '64c2daa685b51d061b009276',
                      name: 'J. Robert Oppenheimer',
                      phone: '0100384789',
                      email: 'example@mail.com',
                      date_of_birth: '1904-04-22T00:00:00.000Z',
                      zip_code: '001600000',
                      pets: [],
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Tutor not found': {
                    value: {
                      error: 'No tutor with id : 64c15d8e4234c0e539203f67',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                  'Invalid ID': {
                    value: {
                      error:
                        'Cast to ObjectId failed for value "tutorId" (type string) at path "_id" for model "Tutor"',
                    },
                  },
                },
              },
            },
          },
        },
      },
      patch: {
        summary: 'Modify a tutor',
        description: 'This route modifies determined values of a tutor',
        tags: ['Tutors'],
        parameters: [
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor to be updated',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Tutor',
              },
              examples: {
                Complete: {
                  value: {
                    email: 'jack@ode.com',
                    pets: {
                      name: 'Tnado',
                      species: 'seal',
                      carry: 's',
                      weight: 5,
                      date_of_birth: '1998/12/22 10:15',
                    },
                  },
                },
                'No Pet': {
                  value: {
                    name: 'Jon Dean',
                    date_of_birth: '12/30/2001 22:45',
                    zip_code: '000006176',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Tutor modified',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Tutor',
                },
                examples: {
                  Complete: {
                    value: {
                      _id: '64c4043a5dae4e13d6583527',
                      name: 'Jack Ode',
                      phone: '550023456789',
                      email: 'jack@ode.com',
                      date_of_birth: '1983-12-22T00:00:00.000Z',
                      zip_code: '617600000',
                      pets: [
                        {
                          name: 'Tnado',
                          species: 'seal',
                          carry: 's',
                          weight: 5,
                          date_of_birth: '1998-12-22T10:15:00.000Z',
                          _id: '64c70125d39a82a7b8f2d5a8',
                        },
                      ],
                    },
                  },
                  'No Pet': {
                    value: {
                      _id: '64c4043a5dae4e13d6583527',
                      name: 'Jon Dean',
                      phone: '550023456789',
                      email: 'jack@ode.com',
                      date_of_birth: '2001-12-30T22:45:00.000Z',
                      zip_code: '000006176',
                      pets: [],
                    },
                  },
                },
              },
            },
          },
          404: {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Tutor not found': {
                    value: {
                      error: 'No tutor with id : 64c4043a5dae4e13d6583527',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                  'Invalid ID': {
                    value: {
                      error:
                        'Cast to ObjectId failed for value "tutorId" (type string) at path "_id" for model "Tutor"',
                    },
                  },
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Delete a tutor',
        description: 'This route deletes a tutor',
        tags: ['Tutors'],
        parameters: [
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor to be deleted',
          },
        ],
        responses: {
          200: {
            description: 'Tutor deleted',
          },
          404: {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Tutor not found': {
                    value: {
                      error: 'No tutor with id : 64c15d8e4234c0e539203f67',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                  'Invalid ID': {
                    value: {
                      error:
                        'Cast to ObjectId failed for value "tutorId" (type string) at path "_id" for model "Tutor"',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/pet/{tutorId}': {
      post: {
        description: 'Create a pet',
        summary: 'Create a new pet',
        tags: ['Pets'],
        parameters: [
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Pet',
              },
              examples: {
                Pet: {
                  value: {
                    name: 'Lilo',
                    species: 'dog',
                    carry: 's',
                    weight: 5,
                    date_of_birth: '1998/12/22 10:15',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Pet created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Pet',
                },
                examples: {
                  Pets: {
                    value: [
                      {
                        name: 'Lilo',
                        species: 'dog',
                        carry: 's',
                        weight: 5,
                        date_of_birth: '1998-12-12T10:15:00.000Z',
                        _id: '64c15d8e4234c0e539203f67',
                      },
                    ],
                  },
                },
              },
            },
          },
          404: {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Tutor not found': {
                    value: {
                      error: 'No tutor with id : 64c4043a5dae4e13d6583527',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/pet/{petId}/tutor/{tutorId}': {
      get: {
        description: 'Get a pet',
        summary: 'Get a specific pet',
        tags: ['Pets'],
        parameters: [
          {
            in: 'path',
            name: 'petId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the pet',
          },
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor',
          },
        ],
        responses: {
          200: {
            description: 'Pet received',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Pet',
                },
                examples: {
                  Pets: {
                    value: [
                      {
                        name: 'Lilo',
                        species: 'dog',
                        carry: 's',
                        weight: 5,
                        date_of_birth: '1993-12-12T10:10:00.000Z',
                        _id: '64c15d8e4234c0e539203f67',
                      },
                    ],
                  },
                  Empty: {
                    value: [],
                  },
                },
              },
            },
          },
          404: {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Not found': {
                    value: {
                      error:
                        'No pet with id: 64c15d8e4234c0e539203f67 for tutor with id: 64c15d8e4234c0e539203f67',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                },
              },
            },
          },
        },
      },
      put: {
        description: 'Replace a pet',
        summary: 'This route replaces a pet',
        tags: ['Pets'],
        parameters: [
          {
            in: 'path',
            name: 'petId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the pet',
          },
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Pet',
              },
              examples: {
                Pet: {
                  value: {
                    name: 'Lilo',
                    species: 'dog',
                    carry: 's',
                    weight: 5,
                    date_of_birth: '1998/12/22 10:15',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Pet replaced',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Pet',
                },
                examples: {
                  Pets: {
                    value: [
                      {
                        name: 'Lilo',
                        species: 'dog',
                        carry: 's',
                        weight: 5,
                        date_of_birth: '1998-12-22T10:15:00.000Z',
                        _id: '64c15d8e4234c0e539203f67',
                      },
                    ],
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                },
              },
            },
          },
        },
      },
      patch: {
        description: 'Modify a pet',
        summary: 'This route modifies determined values of a pet',
        tags: ['Pets'],
        parameters: [
          {
            in: 'path',
            name: 'petId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the pet',
          },
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Pet',
              },
              examples: {
                Pet: {
                  value: {
                    name: 'Lilo',
                    species: 'dog',
                    carry: 's',
                    weight: 5,
                    date_of_birth: '1998/12/22 10:15',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Pet updated',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  $ref: '#/components/schemas/Pet',
                },
                examples: {
                  Pets: {
                    value: [
                      {
                        name: 'Lilo',
                        species: 'dog',
                        carry: 's',
                        weight: 5,
                        date_of_birth: '1998-12-22T10:15:00.000Z',
                        _id: '64c15d8e4234c0e539203f67',
                      },
                    ],
                  },
                },
              },
            },
          },
          404: {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Tutor not found': {
                    value: {
                      error: 'No pet with id : 64c15d8e4234c0e539203f67',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                },
              },
            },
          },
        },
      },
      delete: {
        description: 'Delete a pet',
        summary: 'This route deletes a pet',
        tags: ['Pets'],
        parameters: [
          {
            in: 'path',
            name: 'petId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the pet',
          },
          {
            in: 'path',
            name: 'tutorId',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'The ID of the tutor',
          },
        ],
        responses: {
          200: {
            description: 'Pet deleted',
          },
          404: {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Tutor not found': {
                    value: {
                      error: 'No pet with id : 64c15d8e4234c0e539203f67',
                    },
                  },
                },
              },
            },
          },
          500: {
            description: 'Error',
            content: {
              'application/json': {
                schema: {
                  error: 'string',
                },
                examples: {
                  'Internal server error': {
                    value: {
                      error: 'Something went wrong, please try again',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Tutor: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          date_of_birth: {
            type: 'string',
          },
          zip_code: {
            type: 'string',
          },
          pets: {
            $ref: '#/components/schemas/Pet',
          },
        },
      },
      Pet: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          species: {
            type: 'string',
          },
          carry: {
            type: 'string',
          },
          weight: {
            type: 'number',
          },
          date_of_birth: {
            type: 'string',
          },
        },
      },
    },
  },
}
