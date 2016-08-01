CREATE TABLE [dbo].[Inventory] (
    [WarehouseId] INT NOT NULL,
    [ProductId]   INT NOT NULL,
    [Stock]       INT NOT NULL,
    PRIMARY KEY CLUSTERED ([WarehouseId] ASC, [ProductId] ASC),
    FOREIGN KEY ([WarehouseId]) REFERENCES [dbo].[Warehouse] ([WarehouseId]),
    CONSTRAINT [FK__Inventory__Produ__55F4C372] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId])
);



