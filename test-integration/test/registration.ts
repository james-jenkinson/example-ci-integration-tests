import { expect } from 'chai'
import agent from '../helpers/agent'

describe('Registration', () => {
  describe('POST /register', () => {
    const newUserName = `new-user-${Date.now()}`

    it('should return 200 status code', async () => {
      const result = await agent.post('/register').send({
        username: newUserName,
        name: 'My new user',
        password: 'password'
      })
      expect(result.status).to.equal(200)
    })

    it('should be able to log in afterwards', async () => {
      const result = await agent.post('/auth/login').send({
        username: newUserName,
        password: 'password'
      })

      expect(result.status).to.equal(200)
      expect(result.body.token).to.be.a('string')
    })
  })
})
