import inquirer, { prompt } from 'inquirer';
import { getStock } from '../controllers/get-stock';
import { getStockDetiles } from '../controllers/stock-detiles';
import { searchStock} from '../controllers/search-stock';


export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1- View all stock 📈',
			// '2- Add new ',
			// '3- Update ',
			// '4- Delete  ',
			'2- search stock by name 🔍',
			'3-  View details stock',
			'4- Quit app ',
		],
		filter: (val) => +val[0],
	});
	switch (q2Answer) {
		case 1:
			await getStock();
			break;
		case 2:
			await searchStock();
			break;
		case 3:
				await getStockDetiles();
				break;
		case 4:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}
}
