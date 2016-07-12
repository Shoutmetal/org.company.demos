CREATE TABLE [dbo].[OrderProduct] (
    [OrderProductId] INT IDENTITY (1, 1) NOT NULL,
    [OrderId]        INT NOT NULL,
    [ProductId]      INT NOT NULL,
    [Quantity]       INT NULL,
    CONSTRAINT [PK_OrderProduct] PRIMARY KEY CLUSTERED ([OrderProductId] ASC),
    CONSTRAINT [FK__OrderProd__Order__2C3393D0] FOREIGN KEY ([OrderId]) REFERENCES [dbo].[Order] ([OrderId]),
    CONSTRAINT [FK__OrderProd__Produ__2D27B809] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId])
);



