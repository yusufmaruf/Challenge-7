import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { httpFetch } from "../../utils/http";
import { useLocalStorage } from "../../hooks/useLocalStorage"; 
  import { GoogleOauthToken } from "../../types";
import { useGoogleLogin } from "@react-oauth/google";
import { TUserInfoContext, UserInfoContext } from "../../context/userInfo";
import { ContextType, useContext, Context } from 'react'



 
export default function Login() {
  const navigate = useNavigate()
  const [_token, setToken] = useLocalStorage('token', {})
  const {userInfo, saveUserInfo } = useContext(UserInfoContext) as ContextType<Context<TUserInfoContext>>

  // eslint-disable-next-line

    async function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const response = await httpFetch('login', false, {}, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.currentTarget.email.value,
          password: e.currentTarget.password.value,
        }),        
      })
      // @ts-ignore
      setToken(response.token)
      navigate('/dashboard')
    } catch (error) {
      throw error as Error
    }
  }

  const loginWithGoogle = useGoogleLogin({

    onSuccess: async ({ code }) => {
      const tokens: GoogleOauthToken = await httpFetch('auth/google', false, {}, {
        method: 'post',
        body: JSON.stringify({ code })
      })

      const resUserInfo = await fetch('https://openidconnect.googleapis.com/v1/userinfo?', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Authorization': `${tokens.token_type} ${tokens.access_token}`
        }
      })
      const userInfo = await resUserInfo.json()
      saveUserInfo(userInfo)   
      navigate('/')
    

    },
    flow: 'auth-code',
  });

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Binar Car Manangement</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={submitLogin}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>

                    <div>

                    </div>
                    <div className="mt-3">
                      <div className="d-flex align-items-center justify-content-center">
                        <button className="mb-3" onClick={loginWithGoogle}>Login with Google</button>
                      </div>
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}