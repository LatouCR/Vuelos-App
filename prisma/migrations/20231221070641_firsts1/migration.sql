BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Compra] (
    [Num_Tarjeta] INT NOT NULL,
    [Mes_Exp] INT NOT NULL,
    [Date_Exp] INT NOT NULL,
    [CVV] INT NOT NULL,
    [Monto] DECIMAL(32,16) NOT NULL,
    [Tipo] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Compra_pkey] PRIMARY KEY CLUSTERED ([Num_Tarjeta])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
