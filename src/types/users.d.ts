import { FromSchema } from "json-schema-to-ts"
import { userSchema } from "$schemas/users"

export type User = FromSchema<typeof userSchema>