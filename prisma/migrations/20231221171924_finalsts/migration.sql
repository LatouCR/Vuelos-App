/*
  Warnings:

  - The primary key for the `Compra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CVV` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `Date_Exp` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `Mes_Exp` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `Monto` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `Num_Tarjeta` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `Tipo` on the `Compra` table. All the data in the column will be lost.
  - The required column `id` was added to the `Compra` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `precioCompra` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reservaId` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Compra` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Tarjeta] (
    [Num_Tarjeta] INT NOT NULL,
    [Mes_Exp] INT NOT NULL,
    [Date_Exp] INT NOT NULL,
    [CVV] INT NOT NULL,
    [Monto] DECIMAL(32,16) NOT NULL,
    [Tipo] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Tarjeta_pkey] PRIMARY KEY CLUSTERED ([Num_Tarjeta])
);

-- RedefineTables
BEGIN TRANSACTION;
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'Compra'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_Compra] (
    [id] NVARCHAR(1000) NOT NULL,
    [reservaId] NVARCHAR(1000) NOT NULL,
    [precioCompra] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Compra_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Compra_pkey] PRIMARY KEY CLUSTERED ([id])
);
IF EXISTS(SELECT * FROM [dbo].[Compra])
    EXEC('INSERT INTO [dbo].[_prisma_new_Compra] () SELECT  FROM [dbo].[Compra] WITH (holdlock tablockx)');
DROP TABLE [dbo].[Compra];
EXEC SP_RENAME N'dbo._prisma_new_Compra', N'Compra';
COMMIT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
