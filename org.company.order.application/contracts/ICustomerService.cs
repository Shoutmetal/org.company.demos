using org.company.order.entities;
using System.Collections.Generic;

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
