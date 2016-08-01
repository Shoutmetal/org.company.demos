CREATE TABLE [dbo].[Product] (
    [ProductId]     INT             IDENTITY (1, 1) NOT NULL,
    [ProductTypeId] INT             NULL,
    [Name]          VARCHAR (500)   NOT NULL,
    [Description]   VARCHAR (1500)  NULL,
    [ImageUrl]      VARCHAR (500)   NULL,
    [Price]         DECIMAL (18, 6) NOT NULL,
    [Active]        BIT             NULL,
    CONSTRAINT [PK__Product__B40CC6CDE9482065] PRIMARY KEY CLUSTERED ([ProductId] ASC),
    CONSTRAINT [FK__Product__Product__51300E55] FOREIGN KEY ([ProductTypeId]) REFERENCES [dbo].[ProductType] ([ProductTypeId])
);





