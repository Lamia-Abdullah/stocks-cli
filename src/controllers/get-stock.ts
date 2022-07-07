import axios from 'axios';
import { baseUrl ,token} from '..';

export async function getStock() {
    try{
	const { data: Stock} = await axios.get(baseUrl + '/stock/stocks',{
        headers:{
          Authorization:'Bearer '+ token ,
        },
      });
	const formattedStock = Stock.map((c: any) => ({ name: c.name }));
	console.table(formattedStock);
    }catch (err:any){
		if(err.response){
			console.log(err?.response?.data);
		}
	}

}