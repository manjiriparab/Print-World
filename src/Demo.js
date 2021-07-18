import React, { Component } from 'react';
import {Formik, Form , Field, FieldArray} from 'formik'
import * as Yup from 'yup'

export default class Demo extends Component {

  constructor (props) {
    super(props);
    this.state = {
      user : {
        first_name: 'Manjiri',
        last_name: 'Parab',
        meta : {
          gender: 'female',
          age: 25,
        },
        hobbyname : '',
        hobbies: ["Coding", "Dancing"]
      }
    }
  }

  onKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

    render() {
        return (
            <div>
                <h1>My Info Form</h1>
                <Formik
                    initialValues={this.state.user}
                    onSubmit={(values, actions) => {

                        this.setState( () => ({ user : values}));
                        setTimeout(() => {
                            //alert("Submitted Successfully");
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={() => Yup.object({
                        first_name: Yup.string()
                          .max(15, 'Must be 15 characters or less')
                          .required('First name is required'),
                        last_name: Yup.string()
                          .max(20, 'Must be 20 characters or less')
                          .required('Last name is required'),
                        meta : Yup.object({
                            age: Yup.number().required("Age is required")
                        })
                    })}
                >
                    {props => (
                        <Form onKeyDown={this.onKeyDown}>
                            <div className="mainbox">
                                <div>
                                    <label><strong>First Name : </strong></label> 
                                    <Field type="text" name="first_name"/>
                                    {props.errors.first_name && <span className="pending">{props.errors.first_name}</span>}
                                    <br/>

                                    <label><strong>Last Name : </strong></label> 
                                    <Field type="text" name="last_name"/>
                                    {props.errors.last_name && <span className="pending">{props.errors.last_name}</span>}
                                    <br/>

                                    <label><strong>Age : </strong></label> 
                                    <Field type="text" name="meta.age"/>
                                    {props.errors.meta && <span className="pending">{props.errors.meta.age}</span>}
                                    <br/>

                                    <label><strong>Gender : </strong></label> 
                                    Male : <Field type="radio" name="meta.gender" checked={(props.values.meta.gender==='male')} value="male"/> 
                                    Female : <Field type="radio" name="meta.gender" checked={(props.values.meta.gender==='female')} value="female"/>
                                    <br/>

                                    <FieldArray name="hobbies"
                                        render={ helper => (
                                            <div>
                                                <Field type="text" name="hobbyname" placeholder="Add Hobby"
                                                    onKeyDown = {(e)=>{ 
                                                        if (e.keyCode === 13) {
                                                            helper.push(e.target.value);
                                                            props.setFieldValue('hobbyname', '');
                                                        } 
                                                    }}
                                                />
                                                {props.values.hobbies.map((hobby, index) => (
                                                    <div key={index} className="quotation">
                                                        <span>{props.values.hobbies[index]}</span>
                                                        <button type="button" className="btn btn-danger" onClick={()=>helper.remove(index)}>X</button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    />
                                    <br/>
                                    <button className="btn btn-info" type="submit" disabled={props.isSubmitting}>Submit</button>
                                </div>
                                <div>
                                    <pre> {JSON.stringify(this.state.user, null, 2)} </pre>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
