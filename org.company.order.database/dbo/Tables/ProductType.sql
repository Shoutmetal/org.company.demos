CREATE TABLE [dbo].[ProductType] (
    [ProductTypeId] INT           IDENTITY (1, 1) NOT NULL,
    [Name]          VARCHAR (500) NOT NULL,
    [Active]        BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([ProductTypeId] ASC)
);



