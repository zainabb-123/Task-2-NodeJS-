async function getUsers() {
    try {
        // Fetch users from JSONPlaceholder API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Convert response to JSON
        const users = await response.json();
        

        // Filter users whose catchPhrase contains
        // "group" or "service" (case-insensitive)
        const filteredUsers = users.filter(user =>
            /group|service/i.test(user.company.catchPhrase)
        );

        // Use Object Destructuring and format the data
        const formattedUsers = filteredUsers.map(user => {
            const {
                name,
                email,
                address: { city }
            } = user;

            return `User: ${name} | Email: ${email} | City: ${city}`;
        });

        console.log(formattedUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

getUsers();