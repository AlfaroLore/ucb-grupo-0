export const querys = {
    getAllProducts: "SELECT TOP(500) * FROM [clo].[dbo].[Patient]",
    getProducById: "SELECT * FROM [clo].[dbo].[Patient] Where Id = @Id",
    addNewPatient:
      "INSERT INTO [clo].[dbo].[Patient] (firstName, lastName, phone) VALUES (@firstName,@lastName,@phone);",
    deleteProduct: "DELETE FROM [clo].[dbo].[Patient] WHERE Id= @Id",
    getTotalProducts: "SELECT COUNT(*) FROM clo.dbo.Patient",
    updateProductById:
      "UPDATE [clo].[dbo].[Patient] SET firstName = @firstName, lastName = @lastName, phone = @phone WHERE Id = @id",
  };