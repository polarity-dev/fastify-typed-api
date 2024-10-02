import { userSchema } from "$schemas/users"
import { JsonSchemaFastifyInstance } from "$types"
import UsersService from "$services/users"

export default (server: JsonSchemaFastifyInstance) => {
    server.route({
        method: "GET",
        url: "/users",
        schema: {
            tags: ["users"],
            operationId: "listUsers",
            summary: "Get all users",
            response: {
                200: {
                    type: "array",
                    items: userSchema
                }
            }
        },
        handler: async (_req, reply) => {
            const users = UsersService.getUsers()
            reply.send(users)
        }
    })
}
