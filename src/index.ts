import chalk from 'chalk'; // for coloring output
import figlet from 'figlet'; // for display Banner
import { login } from './questions/login';
// import { q1 } from './questions/q1';
import { q2 } from './questions/q2';


export const baseUrl = "http://localhost:3004";
export let token ='555';
export const globalData: any = {
	token: '',
};

async function start() {
  console.log(
	chalk.blue.bold(
		figlet.textSync('Welcome  to Tracker Marketing Stocks ',{horizontalLayout:'default'})
		));
	
		console.log(chalk.yellow.bold('Tracker Marketing Stocks allows the user to track and get more details about any time '));
	await  login();
	/// Q2/ Tell logged in user about available options
	//      '1- login',//
	// 		'2- View all stock ',
	// 		'3- View details stock',//
	// 		'4- Update password ' ,//
	// 		'5- Delete account ',///
	// 		'6- Search stock by name ',
	// 		'7- add to my list',
	// 	    '10- logout ',///
 	  
	while (true) {
		// await q1();
		await q2();
		
		console.log();
		console.log();
	}
}
start();
