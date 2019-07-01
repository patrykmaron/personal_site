import { useForm, useField } from 'react-final-form-hooks';
import fetch from 'isomorphic-unfetch';

export default (props) => {

    
    const onSubmit = async values => {
        return fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values, 0, 2)
        }).then(response => {
           if (response.status == 200){
               
               props.HandleState();
               return response
           }
         
        })
    }

    const validate = values => {
        const errors = {}
        if(!values.clientName){
            errors.clientName = 'Required'
        }
        if(!values.emailAddress){
            errors.emailAddress = 'Required'
        }
        if(!values.messageContent){
            errors.messageContent = 'Required'
        }
        return errors
    }

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit, // the function to call with your form values upon valid submit
        validate, // a record-level validation function to check all form values
        initialValues: {
            enquiryType: "Individual",
            
        }
    })
    const clientName = useField('clientName', form)
    const emailAddress = useField('emailAddress', form)
    const phoneNumber = useField('phoneNumber', form)
    const existingWebsite = useField('existingWebsite', form)
    const enquiryType = useField('enquiryType', form)
    const messageContent = useField('messageContent', form)


    
    
    return(
        <form onSubmit={handleSubmit} >
            <div className="field-body">
                <div className="field">
                    <label className="label is-large">Name*</label>
                    <div className="control has-icons-left has-icons-right">
                        <input {...clientName.input} className={clientName.meta.touched && clientName.meta.error ? "input is-large is-danger" : "input is-large"} type="text" placeholder="Your name" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                           {clientName.meta.touched &&
                    clientName.meta.error &&  <i className="fas fa-exclamation-triangle"></i>}
                        </span>
                    </div>
                    {clientName.meta.touched &&
                    clientName.meta.error && <p className="help is-danger is-large">{clientName.meta.error}</p>}
                </div>

                <div className="field">
                    <label className="label is-large">Email*</label>
                    <div className="control has-icons-left has-icons-right">
                        <input {...emailAddress.input} className={emailAddress.meta.touched && emailAddress.meta.error ? "input is-large is-danger" : "input is-large"} type="email" placeholder="Email address" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                           {emailAddress.meta.touched &&
                    emailAddress.meta.error &&  <i className="fas fa-exclamation-triangle"></i>}
                        </span>
                    </div>
                   
                    {emailAddress.meta.touched &&
                    emailAddress.meta.error && <p className="help is-danger is-large">{emailAddress.meta.error}</p>}
                </div>
            </div>
           
            <div className="field-body">
            <div className="field">
                    <label className="label is-large">Phone Number</label>
                    <div className="control has-icons-left has-icons-right">
                        <input {...phoneNumber.input} className="input is-large" type="text" placeholder="Phone Number" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-phone"></i>
                        </span>
                        
                    </div>
                    <p className="help is-danger"></p>
                </div>

                <div className="field">
                    <label className="label is-large">Existing Website</label>
                    <div className="control has-icons-left has-icons-right">
                        <input {...existingWebsite.input} className="input is-large" type="text" placeholder="Existing Wesbite" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-link"></i>
                        </span>
                       
                    </div>
                    <p className="help is-danger"></p>
                </div>
            </div>

            <div className="field">
                    <label className="label is-large">Are you enquiring as a Individual or Company?</label>
                    <div className="control">
                       <div className="select is-large">
                            <select {...enquiryType.input}>
                                <option>Individual</option>
                                <option>Company</option>
                            </select>
                       </div>                
                    </div>
                    <p className="help is-danger"></p>
                </div>
            
                <div className="field">
                    <label className="label is-large">Message</label>
                    <div className="control">
                        <textarea {...messageContent.input} className={messageContent.meta.touched && messageContent.meta.error ? "textarea is-large is-danger" : "textarea is-large"} placeholder="Explain how can I help you" />
                    </div>
                    {messageContent.meta.touched &&
                    messageContent.meta.error && <p className="help is-danger is-large">{messageContent.meta.error}</p>}
                </div>

                <div className="field is-grouped is-grouped-right">
                    <p className="control ">
                        <button className={submitting ? "button is-rounded is-medium is-primary is-loading" : "button is-rounded is-medium is-primary"}
                            type="submit" disabled={submitting}                      
                        >
                            <span className="icon is-small">
                                <i className="fas fa-paper-plane"></i>
                            </span>
                            <span>Submit</span>
                        </button>
                    </p>
                </div>
        </form>
    )
}