import axios from 'axios';
import { baseUrl ,token} from '..';

export async function getUser() {
    try{
	const { data: Users} = await axios.get(baseUrl + '/Users',{
        headers:{
          Authorization:'Bearer '+ token ,
        },
      });
	const formattedUser = Users.map((c: any) => ({ name: c.name }));
	console.table(formattedUser);
    }catch (err:any){
		if(err.response){
			console.log(err?.response?.data);
		}
	}

}