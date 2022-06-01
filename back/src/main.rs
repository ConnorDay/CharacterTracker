extern crate dotenv;
#[macro_use] extern crate rocket;

use rocket_db_pools::{sqlx, Database};
use rocket_db_pools::Connection;
use rocket_db_pools::sqlx::Row;

#[derive(Database)]
#[database("mysql")]
struct Logs(sqlx::MySqlPool);

#[get("/")]
async fn index() -> &'static str {
    "Hello, World!"
}

#[get("/<id>")]
async fn read(mut db: Connection<Logs>, id: i64) -> Option<String> {
    sqlx::query("SELECT * FROM characters WHERE id = ?").bind(id)
        .fetch_one(&mut *db).await
        .and_then(|r| {
            let result = Ok(r.try_get(2)?);
            match &result{
                Ok(res) => println!("Character name = {}",&res),
                Err(_e) => println!("error :(")
            }
            return result
        })
        .ok()
}


#[launch]
fn rocket() -> _ {
    dotenv::dotenv().ok();
    rocket::build().attach(Logs::init()).mount("/", routes![index]).mount("/", routes![read])
}
