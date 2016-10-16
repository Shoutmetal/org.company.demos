using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.product.query.domain
{
    public class Product
    {
        public Product()
        {  
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }

        
    }
}
