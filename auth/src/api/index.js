const axios = require("axios")

const employeeApi = axios.create({
	baseURL: "http://localhost/employee/"
})

const

module.exports = { employeeApi }