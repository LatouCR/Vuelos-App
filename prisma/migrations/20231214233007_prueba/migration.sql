BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [adminId] INT,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [User_username_key] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[Admin] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Admin_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Admin_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Admin_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Admin_username_key] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[Consecutivo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [descripcion] NVARCHAR(1000) NOT NULL,
    [prefijo] NVARCHAR(1000),
    [rangoInicial] INT,
    [rangoFinal] INT,
    [poseeRango] BIT NOT NULL,
    [valorConsecutivo] INT NOT NULL,
    [adminId] INT,
    CONSTRAINT [Consecutivo_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Reserva] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userId] INT NOT NULL,
    [vueloId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Reserva_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Reserva_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Vuelo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [codigoAerolinea] INT NOT NULL,
    [origenCodigoPais] INT NOT NULL,
    [destinoCodigoPais] INT NOT NULL,
    [codigoPuertaSalida] INT NOT NULL,
    [codigoPuertaLlegada] INT NOT NULL,
    [fechaSalida] DATETIME2 NOT NULL CONSTRAINT [Vuelo_fechaSalida_df] DEFAULT CURRENT_TIMESTAMP,
    [fechaLlegada] DATETIME2 NOT NULL CONSTRAINT [Vuelo_fechaLlegada_df] DEFAULT CURRENT_TIMESTAMP,
    [estadoVuelo] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Vuelo_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Vuelo_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Aerolinea] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Aerolinea_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Aerolinea_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Aerolinea_nombre_key] UNIQUE NONCLUSTERED ([nombre])
);

-- CreateTable
CREATE TABLE [dbo].[Pais] (
    [id] INT NOT NULL IDENTITY(1,1),
    [pais_Nombre] NVARCHAR(1000) NOT NULL,
    [paisID] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Pais_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Pais_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Pais_pais_Nombre_key] UNIQUE NONCLUSTERED ([pais_Nombre]),
    CONSTRAINT [Pais_paisID_key] UNIQUE NONCLUSTERED ([paisID])
);

-- CreateTable
CREATE TABLE [dbo].[PuertaAeropuerto] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero] INT NOT NULL,
    [detalle] NVARCHAR(1000) NOT NULL,
    [estado] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [PuertaAeropuerto_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [PuertaAeropuerto_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_adminId_fkey] FOREIGN KEY ([adminId]) REFERENCES [dbo].[Admin]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Consecutivo] ADD CONSTRAINT [Consecutivo_adminId_fkey] FOREIGN KEY ([adminId]) REFERENCES [dbo].[Admin]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Reserva] ADD CONSTRAINT [Reserva_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Reserva] ADD CONSTRAINT [Reserva_vueloId_fkey] FOREIGN KEY ([vueloId]) REFERENCES [dbo].[Vuelo]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
