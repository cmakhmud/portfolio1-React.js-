import React from "react";
import '../contact/formgroup.css'
class FormGroup extends React.Component {
    render() {
        const {
            id,  
            placeholder, 
            errorText,
            name, 
            hasError,
            inpType,
            inpRef
        } = this.props;
        return (
            <>
                <div className="form-group">
                    <input name={name} ref={inpRef} type={inpType} id={id} 
                        className={`form-control contact-input ${hasError?'is-invalid':''}`} 
                        placeholder={placeholder} />
                    {hasError ? (
                        <div className="invalid-feedback">
                            {errorText}
                        </div>
                    ): null}
                </div> 
            </>
        )
    }
}
export default FormGroup;