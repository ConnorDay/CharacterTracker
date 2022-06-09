extern crate dotenv;
#[macro_use] extern crate rocket;

use rocket::serde::{Serialize, json::Json};

use rocket_db_pools::{sqlx, Database};
use rocket_db_pools::Connection;
use rocket_db_pools::sqlx::Row;

#[derive(Database)]
#[database("mysql")]
struct Logs(sqlx::MySqlPool);

#[derive(Serialize)]
struct Table {
    name: String
}

#[get("/")]
async fn read(mut db: Connection<Logs>) -> Option<String> {
    sqlx::query("SELECT * FROM characters")
        .fetch_all(&mut *db).await        
        .and_then(|r| {
            for row in r {
                let item: Result<String,sqlx::Error> = row.try_get(2);
                match &item{
                    Ok(res) => println!("Character name = {}",&res),
                    Err(_e) => println!("error :(")
                }
                /*
                return result
                */
            }
            return Ok(String::from("fegli"));
        })
        .ok()
}

#[get("/fegli")]
async fn fegli() -> Option<Json<Table>> {
    Some(Json(Table{
        name: String::from("fegli surpeme")
    }))
}


#[launch]
fn rocket() -> _ {
    dotenv::dotenv().ok();
    rocket::build().attach(Logs::init()).mount("/", routes![read,fegli])
}
