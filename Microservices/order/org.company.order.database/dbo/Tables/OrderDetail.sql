CREATE TABLE [dbo].[OrderDetail] (
    [OrderId]   INT NOT NULL,
    [ProductId] INT NOT NULL,
    [Quantity]  INT NOT NULL,
    PRIMARY KEY CLUSTERED ([OrderId] ASC, [ProductId] ASC),
    CONSTRAINT [FK__OrderDeta__Order__5CA1C101] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[Order] ([OrderId]),
    CONSTRAINT [FK__OrderDeta__Produ__5D95E53A] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId])
);









