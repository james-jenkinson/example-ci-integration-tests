import superagent from 'supertest'
import config from 'config'

const agent = superagent.agent(config.get('api-url'))

export default agent
