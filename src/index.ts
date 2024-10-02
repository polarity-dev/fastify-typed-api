import Fastify from "fastify"
import fastifySwagger from "@fastify/swagger"
import fastifyStatic from "@fastify/static"
import type { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts"

// ROUTES
import registerDocsRoute from "$routes/docs"
import registerHealthRoute from "$routes/health"
import registerSchemaRoute from "$routes/schema"
import registerGetUsersRoute from "$routes/users/getUsers"
import registerGetUserRoute from "$routes/users/getUser"

const {
    PORT = "8000"
} = process.env

const server = Fastify().withTypeProvider<JsonSchemaToTsProvider>()

server.register(fastifyStatic, {
    root: `${__dirname}/public`
})

void (async () => {
    await server.register(fastifySwagger, {
        openapi: {
            openapi: "3.1.0",
            info: {
                title: "Fastify typed API",
                version: "1.0.0"
            }
        },

    })

    registerDocsRoute(server)
    registerHealthRoute(server)
    registerSchemaRoute(server)
    registerGetUsersRoute(server)
    registerGetUserRoute(server)

    await server.ready()
    await server.listen({
        port: +PORT,
        host: "0.0.0.0",
    })

    console.log(`Server listening on http://localhost:${PORT}`)
})()
    .catch((error) => {
        console.error("Error starting server", error)
    })