CREATE TABLE [dbo].[Inventory] (
    [WarehouseId] INT NOT NULL,
    [ProductId]   INT NOT NULL,
    [Stock]       INT NOT NULL,
    PRIMARY KEY CLUSTERED ([WarehouseId] ASC, [ProductId] ASC),
    FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([ProductId]),
    FOREIGN KEY ([WarehouseId]) REFERENCES [dbo].[Warehouse] ([WarehouseId])
);

