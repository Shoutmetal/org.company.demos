CREATE TABLE [dbo].[Customer] (
    [CustomerId] INT           IDENTITY (1, 1) NOT NULL,
    [Name]       VARCHAR (200) NOT NULL,
    [MiddleName] VARCHAR (200) NULL,
    [LastName]   VARCHAR (200) NOT NULL,
    [Active]     BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([CustomerId] ASC)
);

