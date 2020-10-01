import { getTestClient } from '../../../../utils/getTestClient'

test('client-version-error', async () => {
  const PrismaClient = await getTestClient()
  const prisma = new PrismaClient()
  try {
    await prisma.user.findMany({ invalidArg: true })
  } catch (e) {
    expect(e.clientVersion).toMatchInlineSnapshot(`client-test-version`)
    expect(e).toMatchInlineSnapshot(`

      Invalid \`prisma.user.findMany()\` invocation in
      /client/src/__tests__/integration/errors/client-version-error/test.ts:7:23

      {
        invalidArg: true
        ~~~~~~~~~~
      }

      Unknown arg \`invalidArg\` in invalidArg for type User. Did you mean \`where\`? Available args:
      type findManyUser {
        where?: UserWhereInput
        orderBy?: List<UserOrderByInput> | UserOrderByInput
        cursor?: UserWhereUniqueInput
        take?: Int
        skip?: Int
        distinct?: List<UserDistinctFieldEnum>
      }


    `)
    await prisma.$disconnect()
  }
})
