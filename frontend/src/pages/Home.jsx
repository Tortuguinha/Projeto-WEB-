function HomePage() {

	const user = {
			login: "thuanny",
			name: "Thuanny Helen"
		}

	return (
		<main>
			<div>
				<div>Name: {user.name}</div>
				<div>Login: {user.login}</div>
			</div>
		</main>
	)
}

export default HomePage;
