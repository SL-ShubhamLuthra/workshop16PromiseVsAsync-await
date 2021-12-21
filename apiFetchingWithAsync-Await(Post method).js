const fetch=require('cross-fetch')

function postData(){
    
        url='https://jsonplaceholder.typicode.com/posts'
        dataToSend={"name":"shubham","salary":"123","age":"23"}
      fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:  JSON.stringify(dataToSend)
        }).then(response=>{return response.json()})
        .then(data=>{console.log(data)})

      
}
postData()