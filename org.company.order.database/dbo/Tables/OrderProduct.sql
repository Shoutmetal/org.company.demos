CREATE TABLE [dbo].[OrderProduct] (
    [OrderId]   INT NOT NULL,
    [ProductId] INT NOT NULL,
    [Quantity]  INT NULL,
    PRIMARY KEY CLUSTERED ([OrderId] ASC, [ProductId] ASC),
    FOREIGN KEY ([OrderId]) REFERENCES [dbo].[Order] ([OrderId]),
    FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId])
);

