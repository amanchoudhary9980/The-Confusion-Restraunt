const express = require('express')
const app = express()

app.listen(3000)

app.get('/', function (req, res) {
   res.sendFile('/home/aman/Documents/WebDevelopmentProjects/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter/Bootstrap4/conFusion/index.html'),{root:__dirname}
})

app.get('/about', function (req, res) {
    res.sendFile('/home/aman/Documents/WebDevelopmentProjects/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter/Bootstrap4/conFusion/aboutus.html'),{root:__dirname}
 })
 app.get('/contact', function (req, res) {
    res.sendFile('/home/aman/Documents/WebDevelopmentProjects/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter/Bootstrap4/conFusion/contactus.html'),{root:__dirname}
 })
 
 // Redirects
 app.get('/about-us',(req,res)=>{
    res.redirect('/about')
 })

 // 404 page
app.use((req,res) =>{
    res.status(404).sendFile('/home/aman/Documents/WebDevelopmentProjects/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter/Bootstrap4/conFusion/404.html')
})