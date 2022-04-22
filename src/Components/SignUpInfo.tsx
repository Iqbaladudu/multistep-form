import { FormData } from "./Form";

interface Props {
	formData: FormData;
	setFormData: Function;
}

const SignUpInfo = ({ formData, setFormData }: Props) => {
	return (
		<div className="sign-up-container">
			<input
				type="text"
				placeholder="Email"
				value={formData.email}
				onChange={(e) =>
					setFormData({
						...formData,
						email: e.target.value,
					})
				}
			/>
			<input type="password" name="" id="" placeholder="Password" />
			<input
				type="password"
				name=""
				id=""
				placeholder="Password Confirmation"
			/>
		</div>
	);
};

export default SignUpInfo;
