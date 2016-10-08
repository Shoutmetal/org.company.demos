using System;

namespace org.company.order.command.domain
{
    public abstract class Aggregate
    {
        public Guid Id => new Guid();
    }
}
