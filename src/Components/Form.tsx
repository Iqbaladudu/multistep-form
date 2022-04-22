import { useState } from "react";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

export interface FormData {
	email: string;
	password: string;
	confirmPassword: string;
	first_name: string;
	last_name: string;
	username: string;
	nationality: string;
	other: string;
}

const Form = () => {
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState<FormData>({
		email: "Halo",
		password: "",
		confirmPassword: "",
		first_name: "",
		last_name: "",
		username: "",
		nationality: "",
		other: "",
	});

	const FormTitles = ["Sign Up", "Personal Information", "Other"];

	const PageDisplay = () => {
		if (page === 0) {
			return <SignUpInfo formData={formData} setFormData={setFormData} />;
		}
		if (page === 1) {
			return <PersonalInfo />;
		}
		if (page === 2) {
			return <OtherInfo />;
		}
	};

	return (
		<div className="form">
			<div className="progressbar">
				<div
					style={{
						width:
							page === 0
								? "33.3%"
								: page === 1
								? "66.6%"
								: "100%",
					}}
				></div>
			</div>
			<div className="form-container">
				<div className="header">
					<h1>{FormTitles[page]}</h1>
				</div>
				<div className="body">{PageDisplay()}</div>
				<div className="footer">
					<button
						onClick={() => setPage((i) => i - 1)}
						disabled={page === 0}
					>
						Prev
					</button>
					<button
						disabled={page === FormTitles.length - 1}
						onClick={() => setPage((i) => i + 1)}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
