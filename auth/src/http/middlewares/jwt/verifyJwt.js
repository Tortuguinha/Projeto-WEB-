const { jwtVerifySchema } = require("../../schemas/JWTVerifySchema")
const jwt = require("jsonwebtoken")

const verifyJwt = (req, res, next) => {
	try {
		const result = jwtVerifySchema.safeParse(req.cookies)

		if(!result.success) {
			res
				.status(401)
				.json({
					error: new Error("Cookie inválido")
				})

			throw new Error("Cookie inválido")
		}

		const { accessToken } = result.data

		const userData = jwt.verify(accessToken, env.JWT_SECRET, { complete: true })

		if(!userData) {
			throw new Error("Não há nenhum dado")
		}

		req.user = userData;

		next()
		
	} catch(err) {
		res
            .status(400)
            .json({
                err: err.message,
                status: 400
            })
	}
}

module.exports = { verifyJwt }