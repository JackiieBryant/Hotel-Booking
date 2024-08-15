import {useState} from "react";
import RegisterForm from "../components/RegisterForm";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { register } from "../actions/auth";


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password})
        try {
            const res = await register ({
                name,
                email,
                password,
            });
            setName('');
            setEmail('');
            setPassword('');
    
            console.log('REGISTER USER =====>', res);
            toast.success("Register success, please login");
    
            // Redirection après un délai pour afficher le toast!
            setTimeout(() => {
                navigate('/login');
            }, 6000);
    
        } catch (err) {
            console.log(err);
            if (err.response) {
                // Si err.response est défini, vous pouvez accéder à ses propriétés
                if (err.response.status === 400) {
                    toast.error(err.response.data);
                }
            } else {
                // Si err.response n'est pas défini, affichez une autre erreur
                toast.error('An error occurred. Please try again later.');
            }}};
    

        console.log(process.env.REACT_APP_API)

        return(
        <>
        <div className="container-fluid h1 bg-secondary p-5 text-center" >
            <h1>Register</h1>
        </div> 
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <RegisterForm 
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                    />
                </div>
            </div>
        </div>
        </>
        );


    
}

export default Register;