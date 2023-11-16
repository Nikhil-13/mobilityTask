export const UserTypes = {
  provider: {
    title: 'Providers',
    desc: 'HMO / Workers Comp / SNF / ALF / Medical Centers / OP Centers',
  },
  patients: {
    title: 'Patients',
    desc: 'Patients can book service order and can also order the products online',
  },
  staff: {
    title: 'Staff',
    desc: 'To register as an Staff, you must have an enrollment id of Mobility Health Care',
  },
};

export const ProviderTypes = {
  SNF_ALF: {
    title: 'SNF/ALF',
    desc: 'Skilled Nursing Facility and Assisted Living facilities',
  },
  HMO: {title: 'HMO', desc: ''},
  MEDICAL_OP_CENTERS: {title: 'Medical Centers / OP Centers', desc: ''},
  WORKERS: {title: 'Workers Comp', desc: ''},
};

export const ERRORS = {
  required: 'Required*',
  name_invalid: 'Alphabets Only',
  email_invalid: 'Must be a valid email address',
  password_invalid: 'Must be atleast 8 characters',
  mobile_length: 'Must be exactly 10 characters',
  postcode_length: 'Must be exactly 6 characters',
};

export const PLACEHOLDERS = {
  email: 'Email*',
  password: 'Password*',
  firstname: 'Firstname*',
  lastname: 'Lastname*',
  gender: 'Gender*',
  dateOfBirth: 'Brithday*',
  address: 'Address*',
  city: 'City*',
  state: 'State*',
  postcode: 'Postcode*',
  country: 'Country',
  mobile: 'Mobile*',
  altMobile: 'Alternate Mobile*',
  companyName: 'Company Name',
};
