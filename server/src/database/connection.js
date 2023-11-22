import sql from 'mssql'
const dbSettings ={
    user: 'nata',
    password: 'nata123',
    server: 'localhost',
    database: 'clo',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

export const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings);
      return pool;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { sql };