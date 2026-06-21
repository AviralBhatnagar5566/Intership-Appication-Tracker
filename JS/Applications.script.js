


const response = async function response() {
    const res = await fetch("http://localhost:1000/api/v1/application/applications")
    const data = await res.json()
    console.log(data);
    
    const ApplicationsList = document.getElementById("ApplicationsList")
    data.data.forEach((Applications) => {
        const div = document.createElement("div");
        div.classList.add("ApplicationsList")
        div.innerHTML = `
            <h3>CompanyName: ${Applications.CompanyName}</h3>
            <p>roleposition: ${Applications.roleposition}</p>
            <P>Date: ${Applications.date}</P>
            <p>Status: ${Applications.status}</p>
            <P>applicationLink: ${Applications.applicationlink}</p>
            <p>notes:${Applications.notes}</P>
            <hr>
        `;


        const button = document.createElement("button")
        button.classList.add("Deletebutton")
        button.innerText= "Delete"

        button.addEventListener("click", async() =>{
            await deleteApplication(Applications._id)
        })

        const editButton = document.createElement("button")
        editButton.classList.add("editButton")
        editButton.innerText = "Edit"

        editButton.addEventListener("click",async () =>{
            window.location.href = `update.html?id=${Applications._id}`
        })

         div.appendChild(button);
        div.appendChild(editButton)
        ApplicationsList.appendChild(div)

       
    })
}


response()