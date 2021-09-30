// library express and axios
const express = require("express")
const axios = require("axios")
const app = express()

// the name of the file
app.use(express.static('public'))

// app.get('/date.json', (req, res) => {
//   res.json({
//     date: new Date()
//   })
// })

// app.get('/date', (req, res) => {
//   res.end("Date: " + new Date())
// })

app.get('/bird', (req, res) => {
  const said = req.query.p;
  axios.get('https://www.xeno-canto.org/api/2/recordings?query=' + said).then(response => {
    res.json(response.data)
  })
})

app.listen(8000, () => {
  console.log('Server started at http://127.0.0.1:8000')
})
