import { JsonSchemaFastifyInstance } from "$types"

export default (server: JsonSchemaFastifyInstance) => {
    server.route({
        method: "GET",
        url: "/docs",
        schema: {
            tags: ["common"],
            operationId: "docs",
            summary: "Get the API documentation"
        },
        handler: async (_req, reply) => {
            return reply.sendFile("docs.html")
        }
    })
}
