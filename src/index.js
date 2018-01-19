import Express from 'express'
import Test from "./test";
const app = Express()

app.get('/',(req,res)=>{
  res.send('hello')
})

app.get('/info',(req,res)=>{
  res.send(Test())
})

app.listen(process.env.PORT || 9080)
