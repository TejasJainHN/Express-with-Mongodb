const data=mongoose.connect('mongodb+srv://TejasJain:TejasJainHN@cluster0.r8v55.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

data.then((d)=>{
console.log('connected to db')
}).catch((err)=>{
  console.log('not connected to db')
  }).finally()
