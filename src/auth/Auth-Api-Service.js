const data = {
    user: "username,
    pw: "pw"
};
fetch('http://localhost:3000/auth/login', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(...)