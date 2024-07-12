// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "Crimson",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
			Footer
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Me</Heading>
						<FooterLink href="#">
							Pratistha
						</FooterLink>
						<FooterLink href="#">
							Parampara
						</FooterLink>
						<FooterLink href="#">
							Anusashan
						</FooterLink>
					</Column>
					<Column>
						<Heading>Skills</Heading>
						<FooterLink href="#">
							Data Structures and Algorithms
						</FooterLink>
						<FooterLink href="#">
							Web Deveopment
						</FooterLink>
						<FooterLink href="#">
							Public Speaking
						</FooterLink>
						<FooterLink href="#">
							Content Writing
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Me</Heading>
						<FooterLink href="#">
                        +91 79065 94297
						</FooterLink>
						<FooterLink href="#">
							my email id(khud daal lio)
						</FooterLink>
						<FooterLink href="#">
							my intsagram id(khud daal lio)
						</FooterLink>
						<FooterLink href="#">
							New Delhi
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Linkdin
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
