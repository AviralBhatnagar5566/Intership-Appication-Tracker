

const response = async function response(CompanyName,roleposition,date,status,applicationlink,notes) {
    try {
        const response = await fetch("http://localhost:1000/api/v1/application/applicationform",{
         method: "POST",
         headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                CompanyName,
                roleposition,
                date,
                status,
                applicationlink,
                notes
            }) 
        })

     if(!response.ok){
                return false
            }
            const data =await response.json()
            console.log(data);
            
            return true        
    } catch (error) {
        console.log("Error:",error);
        return false
        
    }
}
