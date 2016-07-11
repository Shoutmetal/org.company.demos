CREATE TABLE [dbo].[Order] (
    [OrderId]   INT           IDENTITY (1, 1) NOT NULL,
    [ClientId]  INT           NOT NULL,
    [Number]    VARCHAR (100) NOT NULL,
    [OrderDate] DATETIME2 (7) NOT NULL,
    [IsActive]  BIT           NOT NULL,
    CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED ([OrderId] ASC),
    CONSTRAINT [FK_Order_ClientId] FOREIGN KEY ([ClientId]) REFERENCES [dbo].[Client] ([ClientId])
);

