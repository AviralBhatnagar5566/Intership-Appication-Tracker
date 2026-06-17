

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
                applicationlink: applicationlink || "", 
                notes: notes || ""
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
const CompanyName = document.getElementById("Companyname").value.trim()
const roleposition = document.getElementById("roleposition").value.trim()
const date = document.getElementById("date").value.trim()
const status = document.getElementById("status").value.trim()
const applicationlink = document.getElementById("applicationlink").value.trim()
const notes = document.getElementById("notes").value.trim()
const selectedDate = new Date(date)
const today = new Date()
today.setHours(0,0,0,0)
let isvalue = true

document.getElementById("CompanyNameerror").innerText = "";
document.getElementById("rolepositionerror").innerText = "";
document.getElementById("dateerror").innerText = "";
document.getElementById("sucessMsg").innerText = "";
document.getElementById("statuserror").innerText = "";
document.getElementById("applicationlinkerror").innerText = "";
document.getElementById("notes").innerText = "";


if(!CompanyName||!CompanyName.trim()){
    document.getElementById("CompanyNameerror").innerText = "Write a companyname"
    isvalue = false
}
if(!roleposition||!roleposition.trim()){
    document.getElementById("rolepositionerror").innerText = "Write a roleandposition"
    isvalue = false
}
if(!date){
    document.getElementById("dateerror").innerText = "fill the date"
    isvalue = false
}
if(selectedDate < today){
    document.getElementById("dateerror").innerText = "Date can't not be in past"
}
if(!status){
    document.getElementById("statuserror").innerText = "Select the status"
}

if(isvalue){
        const success = await response(CompanyName,roleposition,date,status,applicationlink,notes)
        if(success){
            document.getElementById("sucessMsg").innerText ="✅ Application submitted successfully!"
            form.reset()
        }
       else{
            document.getElementById("sucessMsg").innerText ="❌ SomeThing Went Wrong"

       }     
    }  