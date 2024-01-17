 
interface formProbs {
    label: string,
    name: string,
    type: string,
    children?:  React.ReactNode
}
const FormInput = ({ label, name, type, children }: formProbs) => {
    return (
        <>
            {type !== 'checkbox' && (<div>
                <div className="form-group"><label>{label}</label>
                    <input className="form-control form-control-lg group_formcontrol" name={name} type={type} />
                </div>
            </div>)}

            {type === 'checkbox' && (<div className="form-group">
                <label className="custom-check d-flex">
                    <input type="checkbox" />{label}
                    {children}
                    <span className="checkmark"></span>
                </label>
            </div>)}
        </>
    )
}

export default FormInput
