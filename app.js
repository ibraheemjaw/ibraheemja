const express =('express')
const app = express()
app.use(express.json())
app.get('/name', (req, res) => {
  res.json("ibraheem jawabreh done")
})
app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})
