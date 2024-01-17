 interface buttonProps {
    type: "submit" | "reset" | "button" 
    text: string
 }
const Button = ({type, text}:buttonProps) => {
  return (
    <div className="pt-1">
    <div className="text-center">
        <button className="btn newgroup_create btn-block d-block w-100" type={type}>{text}</button>
    </div>
</div>
  )
}

export default Button
