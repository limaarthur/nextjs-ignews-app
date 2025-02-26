import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Arthur' },
    { id: 2, name: 'Davi' },
    { id: 3, name: 'Antonio' },
  ]

  return response.json(users)
}