using System;

namespace org.company.inventory.command.domain
{
    public abstract class Aggregate
    {
        public Guid Id => new Guid();
    }
}
