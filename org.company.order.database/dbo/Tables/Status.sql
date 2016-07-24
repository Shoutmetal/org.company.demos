CREATE TABLE [dbo].[Status] (
    [StatusId] INT           IDENTITY (1, 1) NOT NULL,
    [Name]     VARCHAR (100) NULL,
    [Active]   BIT           NULL,
    PRIMARY KEY CLUSTERED ([StatusId] ASC)
);

