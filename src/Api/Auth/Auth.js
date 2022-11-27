import toast from "react-hot-toast";
const insertTime = new Date().getTime();
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

export const setAuthToken = (user, accountType) => {
    const currentUser = {
        email: user.email,
        userImg: user.photoURL,
        signUpType: "Email",
        userName: user.displayName,
        accountType,
        insertTime,
        date,
        time


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
        signUpType: "Google",
        userName: user.displayName,
        accountType: "Buyer",
        insertTime,
        date,
        time

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