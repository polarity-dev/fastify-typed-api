import { userSchema } from "$schemas/users"
import { JsonSchemaFastifyInstance } from "$types"
import UsersService from "$services/users"

export default (server: JsonSchemaFastifyInstance) => {
    server.route({
        method: "GET",
        url: "/users/:id",
        schema: {
            tags: ["users"],
            operationId: "getUser",
            params: {
                type: "object",
                properties: {
                    id: { type: "number" }
                },
                required: ["id"],
            },
            summary: "Get user by id",
            response: {
                200: userSchema,
                404: {
                    type: "object",
                    properties: {
                        message: { type: "string" }
                    },
                    required: ["message"],
                    additionalProperties: false
                }
            }
        },
        handler: async (req, reply) => {
            const { id } = req.params
            const user = UsersService.getUser(id)

            if (!user) {
                reply.status(404).send({ message: `User ${id} not found` })
                return
            }

            return reply.send(user)
        }
    })
}
