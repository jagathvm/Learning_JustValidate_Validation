// Initialize JustValidate for the form
const validator = new JustValidate(form, {
  errorFieldCssClass: 'error-field', // Class applied to fields with errors
  errorLabelCssClass: 'error-label', // Class applied to error messages
  successFieldCssClass: 'success-field', // Class applied to valid fields
  successLabelCssClass: 'success-label', // Class applied to success messages
});

// Add validation rules for the email field
validator
  .addField('#floatingEmail', [
    {
      rule: 'required', // Email is required
      errorMessage: 'Email is required',
    },
    {
      rule: 'email', // Must be a valid email address
    },
  ])

  // Add validation rules for the password field
  .addField('#floatingPassword', [
    {
      rule: 'required', // Password is required
      errorMessage: 'Password is required',
    },
    {
      rule: 'minLength', // Minimum length of 8 characters
      value: 8,
      errorMessage:
        'Password must be at least 8 characters long',
    },
    {
      rule: 'customRegexp', // Must contain at least one letter
      value: /^(?=.*[a-zA-Z])/,
      errorMessage:
        'Password must contain at least one letter',
    },
    {
      rule: 'customRegexp', // Must contain at least one digit
      value: /^(?=.*\d)/,
      errorMessage:
        'Password must contain at least one digit',
    },
    {
      rule: 'customRegexp', // Must contain at least one special character
      value:
        /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
      errorMessage:
        'Password must contain at least one special character',
    },
    {
      rule: 'maxLength', // Maximum length of 16 characters
      value: 16,
      errorMessage:
        'Password must not exceed 16 characters',
    },
    {
      rule: 'password', // General password validation
    },
  ]);
