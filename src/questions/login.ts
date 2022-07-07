import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function login() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Please login or quit !',
		choices: ['Login', 'Quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log('Bayyye 👊');
		process.exit(0);
	}
	const { email, password } = await prompt([
        {
			type: 'input',
			name: 'user name',
			message: 'Enter your user name 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
		// {
		// 	type: 'list',
		// 	name: 'role',
		// 	message: 'role ',
		// 	choices:['user','admin']
		// },
	]);

	try {
		const result = await axios.post(baseUrl + '/login', {
			email,
			password,
		});

		const newToken = result.data.token;
		globalData.token = newToken;
	} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);
	}
}