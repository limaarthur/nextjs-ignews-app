import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)

  const users = [
    { id: 1, name: 'José' },
    { id: 2, name: 'Davi' },
    { id: 3, name: 'Antonio' },
  ]

  return response.json(users)
}