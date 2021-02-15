console.log('processo, onde?', process.env.DATABASE_URL)

module.exports =  {
  "type": "postgres",
  "url":process.env.DATABASE_URL,
  "synchronize":false,
  "entities": [
    process.env.ENTITIES_URL,
 ],
 "migrations": [
  process.env.MIGRATIONS_URL,
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations"
  ],
  "entitiesDir": "src/models"
  }
}