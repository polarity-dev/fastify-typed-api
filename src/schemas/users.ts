import { JSONSchema7 } from "json-schema"

export const userSchema = {
    type: "object",
    properties: {
        id: { type: "number" },
        name: { type: "string" },
        email: { type: "string" }
    },
    required: ["id", "name", "email"],
    additionalProperties: false
} as const satisfies JSONSchema7