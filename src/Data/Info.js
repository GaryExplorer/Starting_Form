
export const Info_types = ['FIRSTNAME', 'LASTNAME', 'EMAIL']

export const FIRSTNAME = {
    type : 'FIRSTNAME',
    label : 'First name',
    needValidation : true,
    placeHolderFocus : '',
    placeHolderNormal : 'First name',
}

export const LASTNAME = {
    type : 'LASTNAME',
    label : 'Last name',
    needValidation : true,
    placeHolderFocus : '',
    placeHolderNormal : 'Last name',
}

export const EMAIL = {
    type : 'EMAIL',
    label : 'Email address',
    needValidation : true,
    placeHolderFocus : 'yourid@host.com',
    placeHolderNormal : 'Email address',
    bottomNormal : 'Your email address is what you will use to return to the site' ,
    bottomError : 'Please enter a valid email address',
}

export const DOB = {
    type : 'DOB',
    label : 'Date of birth(MM/DD/YYYY)',
    needValidation : true,
    placeHolderFocus : 'MM/DD/YYYY',
    placeHolderNormal : 'Date of birth (MM/DD/YYYY)',
    bottomNormal: 'You must be 18 or older to apply for a loan.',

}