import React from 'react'
import { useFormik } from 'formik'
import {MdError}from 'react-icons/md'

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First Name cannot be empty';
    } 
  
    if (!values.lastName) {
      errors.lastName = 'Last Name cannot be empty';
    }
  
    if (!values.email) {
      errors.email = 'Email cannot be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Looks like this is not an email';
    }

    if (!values.password) {
        errors.password = 'Password cannot be empty';
    }
  
    return errors;
  };

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        });

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="input-group">
        <input 
          className={formik.touched.firstName && formik.errors.firstName ? 'error' : null}
          type="text" 
          name="firstName" 
          id="firstName"  
          placeholder="First Name"  
          onChange={formik.handleChange}
          value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? <MdError className='icon'/> : null}
          {formik.touched.firstName && formik.errors.firstName ? ( <div className='errorDiv'>{formik.errors.firstName}</div>) : null}
    </div>
    <div className="input-group">
        <input 
          className={formik.touched.lastName && formik.errors.lastName ? 'error' : null}
          type="text" 
          name="lastName"  
          id="lastName" 
          placeholder="Last Name"  
          onChange={formik.handleChange}
          value={formik.values.lastName}/>
          {formik.touched.lastName && formik.errors.lastName ? <MdError className='icon'/> : null}
          {formik.touched.lastName && formik.errors.lastName ? ( <div className='errorDiv'>{formik.errors.lastName}</div>) : null}
    </div>
    <div className="input-group">
        <input 
          className={formik.touched.email && formik.errors.email ? 'error' : null}
          type="email" 
          name="email" 
          id="email" 
          placeholder="Email Address"  
          onChange={formik.handleChange}
          value={formik.values.email} />
          {formik.touched.email && formik.errors.email ? <MdError className='icon'/> : null}
          {formik.touched.email && formik.errors.email ? ( <div className='errorDiv'>{formik.errors.email}</div>) : null}
    </div>
    <div className="input-group">
        <input 
          className={formik.touched.password && formik.errors.password ? 'error' : null}
          type="password" 
          name="password"
          id="password"  
          placeholder="Password"  
          onChange={formik.handleChange}
          value={formik.values.password}/>
          {formik.touched.password && formik.errors.password ? <MdError className='icon'/> : null}
          {formik.touched.password && formik.errors.password ? ( <div className='errorDiv'>{formik.errors.password}</div>) : null}
    </div>
    <button type="submit">
        claim your free trial
    </button>
    <small>By clicking the button, you are agreeing to our <a href="/home">Terms and Services</a></small>
   </form>
  )
}

export default SignUpForm
