var mongo = require('./index.js')
mongo('insert1','userinfo','user',{name:'xxx',age:'10000'},function(a){
    console.log(a)
})