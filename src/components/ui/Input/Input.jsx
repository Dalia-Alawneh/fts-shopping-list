const Input = ({ name, type, placeholder, onChange }) => {
  return <input 
  className="border border-gray-300 w-full p-1 rounded 
  focus-visible:outline-primary-green"
  type={type}
  onChange={onChange}
  name={name}
  placeholder={placeholder} />
}

export default Input
