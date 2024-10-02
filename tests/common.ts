import { describe, it } from "node:test"
import assert from "node:assert"
import client from "$sdk/client"

describe("common", () => {
    it("schema:200", async () => {
        const { status } = await client.common.schema()
        assert.strictEqual(status, 200)
    })

    it("docs:200", async () => {
        const { status } = await client.common.docs()
        assert.strictEqual(status, 200)
    })

    it("health:200", async () => {
        const { status } = await client.common.health()
        assert.strictEqual(status, 200)
    })
})
