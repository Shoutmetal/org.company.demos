using org.company.order.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.application.contracts
{
    public interface ICustomerService
    {
        void AddCustomer(Customer customer);
        IEnumerable<Customer> GetCustomers();
        Customer GetCustomerById(int id);
        void UpdateCustomer(Customer customer);
    }
}
