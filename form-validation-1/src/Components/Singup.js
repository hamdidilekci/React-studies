import { useFormik } from 'formik';
import validationSchema from './Validations'

function Singup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                email: '',
                password: '',
                passwordConfirm: ''
            },
            onSubmit: values => {
                console.log(values);
            },
            validationSchema,
        });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                />
                {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                <br />
                <label>Password</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    value={values.password}
                />
                {errors.password && touched.password && <div className='error'>{errors.password}</div>}
                <br />
                <label>Confirm Password</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                />
                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
                <br />
                <br />
                <button type="submit"><strong>Submit</strong></button>
                <br />
                <br />
                <div>
                    <ul>
                        <li>E-mail: {values.email}</li>
                        <li>Password: {values.password}</li>
                        <li>Confirm Password: {values.passwordConfirm}</li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default Singup;