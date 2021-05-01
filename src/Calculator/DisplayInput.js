const DisplayInput = ({ value, setValue }) => {
  return (
    <input
      onChange={e => {
        setValue(e.target.value)
      }}
      value={value}
      type='number'
    />
  )
}

export default DisplayInput
