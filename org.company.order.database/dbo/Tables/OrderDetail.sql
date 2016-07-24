CREATE TABLE [dbo].[OrderDetail] (
    [OrderId]    INT           NOT NULL,
    [ProductId]  INT           NOT NULL,
    [CustomerId] INT           NULL,
    [Quantity]   INT           NOT NULL,
    [OrderDate]  DATETIME2 (7) NULL,
    PRIMARY KEY CLUSTERED ([OrderId] ASC, [ProductId] ASC),
    FOREIGN KEY ([CustomerId]) REFERENCES [dbo].[Customer] ([CustomerId]),
    FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId]),
    CONSTRAINT [FK__OrderDeta__Order__5CA1C101] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[Order] ([OrderId])
);



