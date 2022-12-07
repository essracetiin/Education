import React, {useState} from 'react'

export default function Register() {
    const [user,setUser] = useState({"fullname":"","email":"","password":""})
    const change = (event) => {
        setUser({...user,[event.target.value]:[event.target.name]})
        console.log(user);
    }
    const submit= (event) =>{
        event.preventDefault()
        console.log(user);
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="fullname">Full Name</label><br />
                <input type="text" name="fullname" onChange={change} /><br />

                <label htmlFor="email">E-Mail</label><br />
                <input type="text" name="email" onChange={change} /><br />

                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" onChange={change} /><br />
                <input type="submit" value="Ok"/>
            </form>
        </div>
    )
}
