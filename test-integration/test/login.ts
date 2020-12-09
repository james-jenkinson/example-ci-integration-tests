import { expect } from 'chai'
import agent from '../helpers/agent'

describe('Login', () => {
  describe('POST /auth/login', () => {
    it('should be able to log in with correct password', async () => {
      const result = await agent.post('/auth/login').send({
        username: 'test-user',
        password: 'password'
      })

      expect(result.status).to.equal(200)
      expect(result.body.token).to.be.a('string')
    })

    it('should return status 403 with incorrect password', async () => {
      const result = await agent.post('/auth/login').send({
        username: 'test-user',
        password: 'wrong-password'
      })

      expect(result.status).to.equal(403)
    })

    it('should return status 403 with incorrect username', async () => {
      const result = await agent.post('/auth/login').send({
        username: 'wrong-user',
        password: 'password'
      })

      expect(result.status).to.equal(403)
    })
  })
})
