import {MongoClient} from 'mongodb'

const URL = 'mongodb://127.0.0.1:27017/';


export default class Database{

	connect(){


		return new Promise((resolve, reject) => {

			MongoClient.connect(URL, (err, db) => {
				
				return err ? reject(err) : resolve(db);

			});


		});



	}
}