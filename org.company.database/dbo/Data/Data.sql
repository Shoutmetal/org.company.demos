﻿USE [DbDemo]
GO
SET IDENTITY_INSERT [dbo].[ProductType] ON 

INSERT [dbo].[ProductType] ([ProductTypeId], [Name], [Active]) VALUES (1, N'T-Shirt', 1)
INSERT [dbo].[ProductType] ([ProductTypeId], [Name], [Active]) VALUES (3, N'Jacket', 1)
SET IDENTITY_INSERT [dbo].[ProductType] OFF
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([ProductId], [ProductTypeId], [Name], [Description], [ImageUrl], [Price], [Active]) VALUES (1, 1, N'ASF Jeep 2015', N'Afs JEEP 2015 primavera hombres de moda otoño de algodón Vestido más del tamaño camisas Camisa Hombre blusa Vestido de Hombre ropa Casual 2XL 5XL', N'./container/products/AFS-JEEP-2015.jpg', CAST(31.940000 AS Decimal(18, 6)), 1)
INSERT [dbo].[Product] ([ProductId], [ProductTypeId], [Name], [Description], [ImageUrl], [Price], [Active]) VALUES (2, 1, N'HanHent-Targaryen-Dragon', N'HanHent Targaryen Dragón Camisetas Hombres de Fuego y sangre de Algodón Camisetas de Manga Corta de Juego de Tronos Moda Botín Ocasional Ropa de Hombre', N'./container/products/HanHent-Targaryen-Dragon.jpg', CAST(6.950000 AS Decimal(18, 6)), 1)
INSERT [dbo].[Product] ([ProductId], [ProductTypeId], [Name], [Description], [ImageUrl], [Price], [Active]) VALUES (3, 1, N'2016 Summer Three Quarter', N'2016 de Verano de Tres Cuartos Camisas Causales hombre Moda Slim Fit camisa de la vendimia Barato Ropa De Los Hombres de Gran Tamaño 5XL Popular P212', N'./container/products/2016-Summer-Three-Quarter.jpg', CAST(9.890000 AS Decimal(18, 6)), 1)
INSERT [dbo].[Product] ([ProductId], [ProductTypeId], [Name], [Description], [ImageUrl], [Price], [Active]) VALUES (6, 1, N'M-4XL-Mens-dress-shirts', N'M-4xl Mens visten camisas camisa de algodón camisas de hombre camisas hombre ropa hombre 2016 de verano del ejército militar reloj deportivo exterior', N'./container/products/M-4XL-Mens-dress-shirts.jpg', CAST(29.980000 AS Decimal(18, 6)), 1)
INSERT [dbo].[Product] ([ProductId], [ProductTypeId], [Name], [Description], [ImageUrl], [Price], [Active]) VALUES (7, 1, N'KK Geezer T-Shirt', N'Nuevo 2015 Marca Hombres Chaquetas Y Abrigos de Béisbol Deporte Al Aire Libre Soft Shell Hombre Invierno Casual Ropa Militar Chaqueta de Lana Clásicos', N'./container/products/kk-geezer-t-shirt.jpg', CAST(14.250000 AS Decimal(18, 6)), 1)
INSERT [dbo].[Product] ([ProductId], [ProductTypeId], [Name], [Description], [ImageUrl], [Price], [Active]) VALUES (9, 3, N'Muls Windbreakers Jacket', N'Cortavientos chaqueta de abrigo de los hombres de hip hop polo homme blouson cazadora ejército militar denim jeans hombre chaqueta de piel ropa 3XL15662', N'./container/products/Windbreakers-coat.jpg', CAST(44.500000 AS Decimal(18, 6)), 1)
SET IDENTITY_INSERT [dbo].[Product] OFF
SET IDENTITY_INSERT [dbo].[Warehouse] ON 

INSERT [dbo].[Warehouse] ([WarehouseId], [Name], [Active]) VALUES (1, N'Hangar 18', 1)
INSERT [dbo].[Warehouse] ([WarehouseId], [Name], [Active]) VALUES (2, N'Hangar 19', 1)
SET IDENTITY_INSERT [dbo].[Warehouse] OFF
INSERT [dbo].[Inventory] ([WarehouseId], [ProductId], [Stock]) VALUES (1, 1, 4999)
INSERT [dbo].[Inventory] ([WarehouseId], [ProductId], [Stock]) VALUES (1, 2, 4998)
INSERT [dbo].[Inventory] ([WarehouseId], [ProductId], [Stock]) VALUES (1, 6, 4990)
INSERT [dbo].[Inventory] ([WarehouseId], [ProductId], [Stock]) VALUES (1, 9, 5000)
INSERT [dbo].[Inventory] ([WarehouseId], [ProductId], [Stock]) VALUES (2, 3, 4998)
INSERT [dbo].[Inventory] ([WarehouseId], [ProductId], [Stock]) VALUES (2, 7, 4983)
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([CustomerId], [Name], [MiddleName], [LastName], [Active]) VALUES (1, N'Jose', N'Luis', N'Olivares', 1)
SET IDENTITY_INSERT [dbo].[Customer] OFF
SET IDENTITY_INSERT [dbo].[Status] ON 

INSERT [dbo].[Status] ([StatusId], [Name], [Active]) VALUES (1, N'Created', 1)
INSERT [dbo].[Status] ([StatusId], [Name], [Active]) VALUES (2, N'Completed', 1)
SET IDENTITY_INSERT [dbo].[Status] OFF
