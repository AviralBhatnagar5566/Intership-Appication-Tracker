// get query string from URL
    const params = new URLSearchParams(window.location.search);

// get id value
    const id = params.get("id");
    console.log(id);

const applicationForm = document.getElementById("applicationForm")

const response = async function response() {
    const res = await fetch(`http://localhost:1000/api/v1/application/applicationsByuid/${id}`)
    const data = await res.json()

        document.getElementById("CompanyName").value = data.data.CompanyName;
        document.getElementById("roleposition").value = data.data.roleposition;
        document.getElementById("date").value =data.data.date.split("T")[0];
        document.getElementById("status").value= data.data.status
        document.getElementById("applicationlink").value = data.data.applicationlink;
        document.getElementById("notes").value = data.data.notes
}

applicationForm.addEventListener("submit",async function response(event) {
        const CompanyName =document.getElementById("CompanyName")
        const roleposition = document.getElementById("roleposition").value ;
        const date =document.getElementById("date").value ;
        const status =document.getElementById("status").value
        const applicationlink =document.getElementById("applicationlink").value;
        const notes = document.getElementById("notes").value 

        const response = await fetch(`http://localhost:1000/api/v1/application/updateApplication/${id}`,{
            method:"PATCH",
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
        const data = await response.json()
        document.getElementById("sucessMsg").innerText =
       "Application updated successfully";
       window.location.href = "bookings.html";
    

})
response()