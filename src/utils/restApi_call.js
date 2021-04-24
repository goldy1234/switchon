export function restApi_call(data){
    return fetch("https://reqres.in/api/login",{
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response)=>response.json())
    .catch((error)=>{
        console.log(error);
    })
}