# Garden Store Node Application

## Cloning the file
- run `npm install`
- make an .env file that has these values:
    
    **PORT** = 3000
    
    **PGUSERNAME** = postgres

    **PGPASSWORD** = actual postgres password

    **PGDATABASE** = gardenapp

    **JWT_SECRET** = bananasorwhateveryouwant

- create a database in your **pgadmin** called gardenapp
- run `npm i -g sequelize-cli` in your terminal
- run `npm run dev` to start the server
- run `sequelize db:seed:all` in your terminal
- the user is `wer@odikepki.pr` the password is `test`