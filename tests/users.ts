import { describe, it } from "node:test"
import assert from "node:assert"
import client from "$sdk/client"

describe("users", () => {
    it("getUser:200", async () => {
        const { status } = await client.users.getUser(1)
        assert.strictEqual(status, 200)
    })

    it("getUser:400", async () => {
        const { status } = await client.users.getUser("not_a_number" as unknown as number)
        assert.strictEqual(status, 400)
    })

    it("getUser:404", async () => {
        const { status } = await client.users.getUser(-1)
        assert.strictEqual(status, 404)
    })

    it("listUsers:200", async () => {
        const { status } = await client.users.listUsers()
        assert.strictEqual(status, 200)
    })
})
