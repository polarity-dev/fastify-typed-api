![header](./header.png)

# Fastify Typed API

This repository demonstrates how to build a Fastify API in TypeScript, achieving input validation, OpenAPI documentation, and request typing all through the use of JSON Schema. By utilizing JSON Schema, you ensure data validation, generate OpenAPI documentation, and enforce TypeScript types in a seamless and unified manner.

## Required Knowledge

To effectively use this repository, it is recommended that you have a basic understanding of the following:

- [TypeScript](https://www.typescriptlang.org/): a  typed programming language that builds on JavaScript
- [Fastify](https://fastify.io/): a fast web framework for Node.js, ideal for building APIs
- [OpenAPI specification](https://swagger.io/specification/): a industry standard specification for building APIs
- [JSON Schema](https://json-schema.org/): a vocabulary that allows you to validate, annotate, and define the structure of JSON data
- [TS Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html): a TypeScript feature that allows the compiler to infer types based on the context without explicit type annotations
- [TS Structural typing](https://www.typescriptlang.org/docs/handbook/type-compatibility.html): the TypeScript type system that determines type compatibility based on the structure of the types

## Requirements

- Node.js 20.x or higher

## Setup

1. Clone the repository

```bash
git clone https://github.com/polarity-dev/fastify-typed-api.git
cd fastify-typed-api
```

2. Install dependencies

```bash
npm install
```

3. Run the development server
 
```bash
npm run dev
``` 

## Usage

The API exposes many routes that demonstrate the use of JSON Schema for input validation, OpenAPI documentation, and TypeScript type enforcement.

The following routes are available on `http://localhost:8000`:

- `GET /` - Health check route
- `GET /docs` - OpenAPI web documentation with [Redoc](https://redocly.com/docs/redoc)
- `GET /schema` - OpenAPI schema
- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID

## SDK Generation

The repository includes a script to generate an SDK based on the OpenAPI schema. To generate the SDK, run the following command:

```bash
npm run generate:sdk
```

This command generates the sdk file in `sdk/api.ts` that contains all the routes and types defined in the OpenAPI schema.

The client used in the SDK is [axios](https://axios-http.com/) and can be configured in the `sdk/client.ts` file.

## Tests

To run the tests, use the following command:

```bash
npm test
```

## Additional Key Resources

These are key resources directly related to the technologies and tools used in this repository.

- [Fastify Type providers](https://fastify.dev/docs/latest/Reference/Type-Providers/)
- [Fastify json-schema-to-ts type provider](https://github.com/fastify/fastify-type-provider-json-schema-to-ts)
- [json-schema-to-ts module](https://github.com/ThomasAribart/json-schema-to-ts)
- [Openapi tools](https://openapi.tools/)