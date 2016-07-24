CREATE TABLE [dbo].[OrderDetail] (
    [OrderId]   INT NOT NULL,
    [ProductId] INT NOT NULL,
    [Quantity]  INT NOT NULL,
    PRIMARY KEY CLUSTERED ([OrderId] ASC, [ProductId] ASC),
    FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId]),
    CONSTRAINT [FK__OrderDeta__Order__5CA1C101] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[Order] ([OrderId])
);







