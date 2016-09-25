CREATE TABLE [dbo].[Warehouse] (
    [WarehouseId] INT           IDENTITY (1, 1) NOT NULL,
    [Name]        VARCHAR (500) NOT NULL,
    [Active]      BIT           NULL,
    PRIMARY KEY CLUSTERED ([WarehouseId] ASC)
);

