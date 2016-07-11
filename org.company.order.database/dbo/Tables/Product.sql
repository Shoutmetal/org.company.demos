CREATE TABLE [dbo].[Product] (
    [ProductId]     INT             IDENTITY (1, 1) NOT NULL,
    [Name]          VARCHAR (50)    NOT NULL,
    [Price]         NUMERIC (18, 6) NOT NULL,
    [Stock]         INT             NOT NULL,
    [ProductTypeId] INT             NOT NULL,
    CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED ([ProductId] ASC),
    CONSTRAINT [Product_FK_ProductType] FOREIGN KEY ([ProductTypeId]) REFERENCES [dbo].[ProductType] ([ProductTypeId])
);

