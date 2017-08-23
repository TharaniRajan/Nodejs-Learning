'use strict';

module.exports = function(app) {
	const employeeList = require('../controllers/employeeListController.js'),
	adminHandlers = require('../controllers/adminController.js');

	// employeeList Routes
	app.route('/employeeList')
		.get(employeeList.list_all_employee)
		.post(adminHandlers.loginRequired, employeeList.create_a_employee);

	app.route('/employeeList/:employeeId')
		.get(employeeList.read_a_employee)
		.put(employeeList.update_a_employee)
		.delete(employeeList.delete_a_employee);

	app.route('/auth/register')
		.post(adminHandlers.register);

	app.route('/auth/sign_in')
		.post(adminHandlers.sign_in);
};
