namespace org.company.inventory.command.domain
{
    public class Inventory : Aggregate
    {
        public int WarehouseId { get; set; }
        public int ProductId { get; set; }
        public int Stock { get; set; }
        public Warehouse Warehouse { get; set; }

    }
}
