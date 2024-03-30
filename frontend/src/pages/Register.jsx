import Form from '../components/Form';

function Register() {
    return (
        <div>
            <h1>Register</h1>
            <Form route="/api/user/register/" method="register" />
        </div>
    );
}
export default Register;
