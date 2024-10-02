
import type { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts"
import type {
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    FastifyBaseLogger,
    FastifyInstance,
} from "fastify"

export type JsonSchemaFastifyInstance = FastifyInstance<
    RawServerDefault,
    RawRequestDefaultExpression<RawServerDefault>,
    RawReplyDefaultExpression<RawServerDefault>,
    FastifyBaseLogger,
    JsonSchemaToTsProvider
>