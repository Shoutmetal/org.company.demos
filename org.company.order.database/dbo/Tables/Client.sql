CREATE TABLE [dbo].[Client] (
    [ClientId]   INT           IDENTITY (1, 1) NOT NULL,
    [Name]       VARCHAR (100) NULL,
    [MiddleName] VARCHAR (100) NULL,
    [LastName]   VARCHAR (100) NULL,
    [IsActive]   BIT           NULL,
    PRIMARY KEY CLUSTERED ([ClientId] ASC)
);

