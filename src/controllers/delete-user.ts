import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deleteUser() {
	const { data: user } = await axios.get(baseUrl + '/Users');
	const formattedContacts = user.map((c: any) => ({ name: c.name}));
	console.table(formattedContacts);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const Users = user[index];
	await axios.delete(baseUrl + `/contacts/${user.id}`);
	console.log(`Contact for ${user.name} has been deleted ✅`);
}