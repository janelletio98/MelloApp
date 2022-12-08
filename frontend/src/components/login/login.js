import React from 'react';
import {
	MDBBtn,
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBInput,
} from 'mdb-react-ui-kit';

function Login() {
	return (
		<MDBContainer className="login-card">
			<MDBCard>
				<MDBRow className="g-0">
					<MDBCol className="bg-yellow" md="6">
						<MDBCardImage
							src="https://cdn2.iconfinder.com/data/icons/design-process-2/680/design-lightning-bolt-512.png"
							alt="login form"
							className="rounded-start w-100"
						/>
					</MDBCol>

					<MDBCol className="bg-yellow" md="6">
						<MDBCardBody className="d-flex flex-column">
							<div className="d-flex flex-row mt-2">
								<MDBIcon
									fas
									icon="cubes fa-3x me-3"
									style={{ color: '#ff6219' }}
								/>
								<span className="h1 fw-bold mb-0">MELLOAMP</span>
							</div>

							<h5
								className="fw-normal my-4 pb-3"
								style={{ letterSpacing: '1px' }}>
								Sign into your account
							</h5>

							<MDBInput
								wrapperClass="mb-4"
								label="Email address"
								id="formControlLg"
								type="email"
								size="lg"
							/>
							<MDBInput
								wrapperClass="mb-4"
								label="Password"
								id="formControlLg"
								type="password"
								size="lg"
							/>

							<MDBBtn className="mb-4" style={{ backgroundColor: '#303030' }}>
								Login
							</MDBBtn>
							<a className="small text-muted" href="#!">
								Forgot password?
							</a>

							<p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
								Don't have an account?{' '}
								<a href="signup" style={{ color: '#393f81' }}>
									Register here
								</a>
							</p>
						</MDBCardBody>
					</MDBCol>
				</MDBRow>
			</MDBCard>
		</MDBContainer>
	);
}

export default Login;
