namespace org.company.order.messages
{
    public class PickProducts : ICommand
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
