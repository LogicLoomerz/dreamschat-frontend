 interface buttonProps {
    type: "submit" | "reset" | "button" 
    text: string
    handleClick?:React.MouseEventHandler
 }
const Button = ({type, text, handleClick}:buttonProps) => {
  return (
    <div className="pt-1">
    <div className="text-center">
        <button className="btn newgroup_create btn-block d-block w-100" type={type} onClick={handleClick}>{text}</button>
    </div>
</div>
  )
}

export default Button
