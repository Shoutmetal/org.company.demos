using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.domain
{
    public abstract class Aggregate
    {
        public Guid Id => new Guid();
    }
}
