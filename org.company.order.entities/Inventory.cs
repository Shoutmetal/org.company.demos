
namespace org.company.order.entities
{
    public class Inventory : Aggregate
    {

        public int WarehouseId { get; set; }
        public int ProductId { get; set; }
        public int Stock { get; set; }
        public Warehouse Warehouse { get; set; }
        public Product Product { get; set; }
    }
}
