import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import "../stylesheets/Login-SignUp/Login-SignUp.css";

class Login extends React.Component {

    render() {
        return (
            <div className='login-form'>
                <Grid className='grid-login'textAlign='center' verticalAlign='middle'>
                    <Grid.Column className='grid-column-login'>

                        <Header as='h2' color='blue' textAlign='center'>
                            <Image src='/logo.png' /> Sign Up for an account
                        </Header>

                        <Form size='large' onSubmit={(e) => {e.preventDefault(); console.log("Submitted Form", e.target.username.value, e.target.password.value)}}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' name="username" type="text" placeholder='Username...' />
                                <Form.Input fluid icon='lock' iconPosition='left' name="password" type="password" placeholder='Password...' type='password' />
                                <Button color='blue' type="submit" fluid size='large'>Sign Up!</Button>
                            </Segment>
                        </Form>

                        <Message>Never Played? <a href='/signup'> Create Account!</a></Message>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
export default Login

            // <div>
            //     <form onSubmit={(e) => {e.preventDefault(); console.log("Submited Login") }} >
            //         <input name="username" type="text" label="Username" placeholder="Username..." />
            //         <input name="password" type="password" label="Password" placeholder="Password..." />
            //         <input type="submit" value="Login" />
            //     </form>
            // </div>