import React, {useState } from 'react';
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import Button from '../Button/Button';
import './FormText.scss';

const FormText = (props) => {

    const { array } = props;
    const { reset } = useForm();

    let [formData, setFormData] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
  
      const onSubmit = (data) => {
        data.id = array.length + 1;
        formData = data;
        setFormData(data)
      
          fetch('http://localhost:3000/fact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
           })
            .then(response => response.json())

            reset();
      }; 

    return (

        <div className="col-xl-4 offset-xl-4">
                        <form 
                            className="mt-5"
                            onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-4 field">
                                    <input
                                        className="form-control"
                                        placeholder='Autor *'
                                        {...register("author", {
                                        required: true,
                                        maxLength: 30,
                                        })}
                                    />
                                </div>

                                <div className="mb-4 field">
                                    <input
                                        className="form-control"
                                        placeholder='Image url'
                                        {...register("image", {
                                        required: false,
                                        })}
                                    />
                                </div>

                                
                                <div className="mb-4 field">
                                <Form.Control as="textarea" 
                                            rows={3} 
                                            type="textarea" 
                                            name="info" 
                                            placeholder="Text *" 
                                            {...register("info", {
                                                required: true,
                                                })}
                                />

                                { errors?.message?.type === "required" && <p className='error-message'>Empty message.</p>}
                                </div>

                                <div className="mb-5 field text-center">
                                    <Button type="submit" myclass="btn btn-secondary" value="Submit" />
                                </div>
            
                        </form>
        </div>
    ) 

}

export default FormText;