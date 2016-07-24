CREATE TABLE [dbo].[Product] (
    [ProductId]     INT             IDENTITY (1, 1) NOT NULL,
    [ProductTypeId] INT             NULL,
    [Name]          VARCHAR (500)   NOT NULL,
    [Price]         DECIMAL (18, 6) NOT NULL,
    [Active]        BIT             NULL,
    PRIMARY KEY CLUSTERED ([ProductId] ASC),
    FOREIGN KEY ([ProductTypeId]) REFERENCES [dbo].[ProductType] ([ProductTypeId])
);



