



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
            <p>Date: ${Applications.date}</p>
            <p>Status: ${Applications.status}</p>
            <P>applicationLink: ${Applications.applicationlink}</p>
            <p>notes:${Applications.notes}</P>
            <hr>
        `;
        ApplicationsList.appendChild(div)
    })
}



response()