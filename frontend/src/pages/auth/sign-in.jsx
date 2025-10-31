import { useState } from "react";
import Form from "../../components/Form";

function SignInPage() {

	const [signInData, setSignInData] = useState({
		email: "",
		password: "",
	})

	const handleClick = (e) => {
		e.preventDefault();

		const emptyFields = Object.keys(signInData).filter(key => !signInData[key]);

		if (emptyFields.length > 0) {
			alert(`Preencha os campos: ${emptyFields.join(", ")}`);
			return;
		}

		console.log("Todos os campos preenchidos! Pode prosseguir.");
	};


	return (
		<main className="w-full h-auto flex items-center justify-center">
			<Form.FormRoot className={"w-72 space-y-4 flex flex-col justify-center"} onSubmit={handleClick}>
				<Form.FormHeader>
					<Form.FormTitle className="text-center text-2xl" title="Entrar" />
				</Form.FormHeader>
				<Form.FormLabel >
					<Form.FormInput
						className="w-full"
						name="email"
						value={signInData.email}
						onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
						placeholder="example@email.com"
						type="email"
						required
					/>
				</Form.FormLabel>
				<Form.FormLabel>
					<Form.FormInput
						className="w-full"
						name="password"
						value={signInData.password}
						onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
						placeholder="********"
						type="password"
						required
					/>
				</Form.FormLabel>
				<Form.FormButton type="submit" label="Fazer Login" />
			</Form.FormRoot>
		</main>
	)
}

export default SignInPage;
