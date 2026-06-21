const deleteApplication = async function deleteApplication(id) {
    const response = await fetch(`http://localhost:1000/api/v1/application/deleteApplication/${id}`,{
        method:"DELETE"
    })
    const data = await response.json()
    console.log(data);
    location.reload()
}