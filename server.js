const express = require('express')
const path = require('path')
const cors = require('cors')
const expressStaticGzip = require('express-static-gzip')

const app = express()
app.use(cors())
// app.use(
//   '/',
//   expressStaticGzip(path.join(__dirname, 'build'), {
//     enableBrotli: true,
//     orderPreference: ['br', 'gz'],
//     setHeaders: function (res, path) {
//       res.setHeader('Cache-Control', 'public, max-age=31536000')
//     },
//   }),
// )

app.use(express.static(path.join(__dirname, 'build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build/index.html'))
// })

app.listen(process.env.PORT || 3000, () => {
  console.log('PORT: 3000')
})
