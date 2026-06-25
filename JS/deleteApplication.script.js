const deleteApplication = async function deleteApplication(id) {
    const comformMessage = confirm("Are You Sure You Want to Delete The Appliction")
     if(!comformMessage){return}

    try{
        const response = await fetch(`https://internship-application-tracker-dind.onrender.com/api/v1/application/deleteApplication/${id}`,{
        method:"DELETE"
        })
        const data = await response.json()
        console.log(data);
        location.reload()
    }

    catch (error) {
        console.error("Failed to delete:", error);
        alert("Something went wrong while deleting.");
    }
}