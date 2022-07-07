import axios from 'axios';
import { baseUrl, token } from '..';

export async function getStockDetiles() {
	try{
	const { data: Stock} = await axios.get(baseUrl + '/stock/stocks',{
	  headers:{
		Authorization:'Bearer '+ token,
	  },
	});
	const formattedStock = Stock.map((c: any) => ({ name: c.name,open:c.open,height:c.height , low:c.low, volume:c.volume}));
	console.table(formattedStock);
	} catch (err:any){
		if(err.response){
			console.log(err?.response?.data);
		}
	}
}