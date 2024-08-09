const validator = new JustValidate(form, {
  errorFieldCssClass: 'error-field',
  errorLabelCssClass: 'error-label',
  successFieldCssClass: 'success-field',
  successLabelCssClass: 'success-label',
});

validator
  .addField('#floatingEmail', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      successMessage: 'Looks Good',
    },
  ])
  .addField('#floatingPassword', [
    {
      rule: 'required',
      errorMessage: 'Password is required',
    },
    {
      rule: 'minLength',
      value: 8,
      errorMessage:
        'Password must be at least 8 characters long',
    },
    {
      rule: 'customRegexp',
      value: /^(?=.*[a-zA-Z])/,
      errorMessage:
        'Password must contain at least one letter',
    },
    {
      rule: 'customRegexp',
      value: /^(?=.*\d)/,
      errorMessage:
        'Password must contain at least one digit',
    },
    {
      rule: 'customRegexp',
      value:
        /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
      errorMessage:
        'Password must contain at least one special character',
    },
    {
      rule: 'maxLength',
      value: 16,
      errorMessage:
        'Password must not exceed 16 characters',
    },
    {
      rule: 'password',
      successMessage: 'Looks Good',
    },
  ]);
