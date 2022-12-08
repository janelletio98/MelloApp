import React from 'react';
import {
	MDBBtn,
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBCheckbox,
} from 'mdb-react-ui-kit';

function Register() {
	return (
		<MDBContainer
			fluid
			className="d-flex align-items-center justify-content-center bg-image"
			style={{
				backgroundImage:
					'url(https://cdn.discordapp.com/attachments/1040735141334614087/1046671260215693342/Logo_1.gif)',
			}}>
			<div className="mask gradient-custom-3"></div>
			<MDBCard className="reg-card" style={{ maxWidth: '600px' }}>
				<MDBCardBody className="reg-card-body">
					<h2 className="text-uppercase text-center mb-5">Create an account</h2>
					{/* <MDBInput
						wrapperClass="mb-4"
						label="Your Name"
						size="lg"
						id="form1"
						type="text"
					/> */}
					<MDBInput
						wrapperClass="mb-4"
						label="Your Email"
						size="lg"
						id="form2"
						type="email"
					/>
					<MDBInput
						wrapperClass="mb-4"
						label="Password"
						size="lg"
						id="form3"
						type="password"
					/>
					<MDBInput
						wrapperClass="mb-4"
						label="Repeat your password"
						size="lg"
						id="form4"
						type="password"
					/>
					<div className="d-flex flex-row justify-content-center mb-4">
						<MDBCheckbox
							name="flexCheck"
							id="flexCheckDefault"
							label="I agree all statements in Terms of service"
						/>
					</div>
					<MDBBtn
						className="mb-4 w-100"
						size="lg"
						style={{ backgroundColor: '#303030' }}>
						Register
					</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}

export default Register;
