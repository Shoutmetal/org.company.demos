CREATE TABLE [dbo].[ProductType] (
    [ProductTypeId] INT          NOT NULL,
    [Name]          VARCHAR (50) NOT NULL,
    [IsActive]      BIT          NOT NULL,
    CONSTRAINT [PK_ProdutTypeId] PRIMARY KEY CLUSTERED ([ProductTypeId] ASC)
);

