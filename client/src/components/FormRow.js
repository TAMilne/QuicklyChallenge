const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='col-md-8'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-control'
        />
      </div>
    )
  }
  
  export default FormRow