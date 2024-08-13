import {useState} from "react"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        alert('send user info to backend')
    };

    const RegisterForm = () => <form onSubmit={handleSubmit}>Show the form</form>
    
        return(
        <>
        <div className="container-fluid h1 bg-secondary p-5 text-center" >
            <h1>Register</h1>
        </div> 

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {RegisterForm()}
                </div>

            </div>
        </div>
        </>
        );


    
}

export default Register;