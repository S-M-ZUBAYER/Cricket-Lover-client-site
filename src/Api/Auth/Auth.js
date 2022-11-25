import toast from "react-hot-toast";

export const setAuthToken = (user, accountType) => {
    const currentUser = {
        email: user.email,
        userImg: user.photoURL,
        accountType,

    }
    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('Cricket-Lover', data.token);
            toast.success('user data added')
        })
}
export const setAuthTokenGmail = (user, accountType) => {
    const currentUser = {
        email: user.email,
        userImg: user.photoURL,
        accountType: "Buyer",

    }
    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('Cricket-Lover', data.token);
            toast.success('user data added')
        })
}