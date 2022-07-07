import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, token } from '..';

export async function searchStock() {
    try{
	const query = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search ',
		},
	]);
	const { data: stock } = await axios.get(baseUrl + '/stock/stocks',{
        headers:{
          Authorization:'Bearer '+ token,
        },
      });
	const formattedStocks = stock.map((c: any) => ({ name: c.name }));
	console.table(formattedStocks);
    }
    catch (err:any){
		if(err.response){
			console.log(err?.response?.data);
		}
	}
}