import express from 'express'

const app = express()

app.get('/api/notes', (req, res) => {
      res.status(200).send('You got 5 notes')
})

app.post('/api/notes', (req, res) => {
      res.status(201).send('Note successfully created')
})

app.listen(5001, () => {
      console.log('Server started on port 5001')
})

