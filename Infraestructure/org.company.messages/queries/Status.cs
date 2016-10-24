using org.company.messaging;

namespace org.company.messages.queries
{
    public class Status : Query
    {
        public int StatusId { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
    }
}