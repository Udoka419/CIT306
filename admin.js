async function fetchUserData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
}

// Function to render user data into HTML
function renderUsers(users) {
    const tableBody = document.getElementById("user-table");
    tableBody.innerHTML = ""; // Clear existing rows

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.email}</td>
            <td>${user.phone_number}</td>
            <td>${user.role}</td>
        `;
        tableBody.appendChild(row);
    });
}

// URL to fetch the data (example API)
const apiUrl = "https://cit306-backend.onrender.com";

// Fetch and render data on page load
fetchUserData(apiUrl).then(data => {
    //data is in data.users
    console.log(data.users)
    renderUsers(data.users);
});
