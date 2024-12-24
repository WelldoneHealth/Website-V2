

// Contact Validator
export const contactValidator = (contact) => {
    if (!contact) {
      return "Contact is required!";
    }
    if (!/^\d{10}$/.test(contact)) {
      return "Contact must be a 10-digit number!";
    }
    return false; // No validation error
  };
  
  // Email Validator
  export const emailValidator = (email) => {
    // if (!email) {
    //   return "Email is required!";
    // }
    if ( email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Invalid email format!";
    }
    return false; // No validation error
  };
  
  // Password Validator (Strong Password)
  export const passwordValidator = (password) => {
    if (!password) {
      return "Password is required!";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long!";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter!";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter!";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one number!";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character!";
    }
    return false; // No validation error
  };
  
  // OTP Validator
  export const otpValidator = (otp) => {
    if (!otp) {
      return "OTP is required!";
    }
    if (!/^\d{6}$/.test(otp)) {
      return "OTP must be a 6-digit number!";
    }
    return false; // No validation error
  };
  

//name validator
export const nameValidator = (name) => {
    if (!name) {
      return "Name is required!";
    }
    
    return false; // No validation error
  };


export const loginValidator=(contactValue,passwordValue)=>{

    const contactError=contactValidator(contactValue)
    const passwordError=!passwordValue && "Password is a required field!"
    
    if (!contactError && !passwordError) {
        return false; 
      }

    return {
        contact:contactError,
        password:passwordError
    }

}

export const otpContactValidator = (contactValue) => {
  const contactError = contactValidator(contactValue);

  return contactError ? { contact: contactError } : false;
};


export const otpLengthValidator=(otpValue)=>{
       

        const otpError=otpValidator(otpValue)

        if(!otpError) return false

        return { otp:otpError}
      
}

export const registerValidator=(nameValue,emailValue,contactValue,passwordValue)=>{
    const contactError=contactValidator(contactValue)
    const nameError=nameValidator(nameValue)
    const emailError=emailValidator(emailValue)
    const passwordError=passwordValidator(passwordValue)

if( !contactError && !nameError&& !emailError && !passwordError) return false

return {
    userName:nameError,
    email:emailError,
    contact:contactError,
    password:passwordError,
   
}
}



export const ErrorMessageComponent=({message})=><p className="text-red-700 text-xs font-medium ">{message}</p>