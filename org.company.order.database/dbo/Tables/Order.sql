CREATE TABLE [dbo].[Order] (
    [OrderId]    INT           IDENTITY (1, 1) NOT NULL,
    [CustomerId] INT           NULL,
    [StatusId]   INT           NULL,
    [Number]     VARCHAR (25)  NULL,
    [OrderDate]  DATETIME2 (7) NULL,
    [Active]     BIT           NULL,
    CONSTRAINT [PK__Order__C3905BCF1B6A3198] PRIMARY KEY CLUSTERED ([OrderId] ASC),
    CONSTRAINT [FK_Order_Customer] FOREIGN KEY ([CustomerId]) REFERENCES [dbo].[Customer] ([CustomerId]),
    CONSTRAINT [FK_Order_Status] FOREIGN KEY ([StatusId]) REFERENCES [dbo].[Status] ([StatusId])
);











