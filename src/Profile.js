import React from 'react'
import Header from './header'
import Layout from './layout';
import {Formik, Form , Field, FieldArray} from 'formik'
import * as Yup from 'yup'

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="sidebar">
                    <Layout/>
                </div>
                <div className="main">
                    <h1>Profile</h1>
                    <div className="profilediv">
                        <img className="myprofile" src="./pri.jpg" alt="profile"/>
                        <Formik
                            initialValues={{ 
                                first_name: 'Manjiri',
                                last_name: 'Parab',
                                email : 'manjiri.parab@conspecure.com'
                            }}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    alert("Submitted Successfully");
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
                                email : Yup.string()
                                    .required("Email is required")
                                    .email("Email is invalid")
                            })}
                        >
                            {props => (
                                <Form onKeyDown={this.onKeyDown}>
                                    <div className="fieldbox">
                                        <label><strong>First Name : </strong></label> 
                                        <Field type="text" name="first_name"/>
                                        {props.errors.first_name && <span className="pending">{props.errors.first_name}</span>}
                                        <br/>

                                        <label><strong>Last Name : </strong></label> 
                                        <Field type="text" name="last_name"/>
                                        {props.errors.last_name && <span className="pending">{props.errors.last_name}</span>}

                                        <br/>
                                        <label><strong>Email : </strong></label> 
                                        <Field type="email" name="email"/>
                                        {props.errors.email && <span className="pending">{props.errors.email}</span>}

                                        <br/>
                                        <button className="btn btn-info" type="submit" disabled={props.isSubmitting}>Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}