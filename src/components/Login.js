import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

class Login extends React.Component {

    render() {
        return (
            <div className='login-form'>
            <style>{`body > div, body > div > div, body > div > div > div.login-form { height: 100%; }`}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>

                        <Header as='h2' color='green' textAlign='center'>
                            <Image src='/logo.png' /> Log-in to your account
                        </Header>

                        <Form size='large' onSubmit={(e) => {e.preventDefault(); console.log("Submitted Form", e.target.username.value, e.target.password.value)}}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' name="username" type="text" placeholder='Email address...' />
                                <Form.Input fluid icon='lock' iconPosition='left' name="password" type="password" placeholder='Password...' type='password' />
                                <Button color='green' type="submit"fluid size='large'>Login</Button>
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