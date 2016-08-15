﻿using org.company.order.application.contracts;
using org.company.order.domain.contracts.repository;
using org.company.order.domain.generic;
using org.company.order.entities;
using System.Collections.Generic;

namespace org.company.order.application.implementation
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _repository;
        private readonly IUnitOfWork _uof;

        public CustomerService(ICustomerRepository repository, IUnitOfWork uof)
        {
            _repository = repository;
            _uof = uof;
        }

        public void AddCustomer(Customer customer)
        {
            _repository.Add(customer);
            _uof.Commit();
        }

        public IEnumerable<Customer> GetCustomers()
        {
            return _repository.GetAll();
        }

        public Customer GetCustomerById(int id)
        {
            return _repository.GetSingle(c => c.CustomerId == id);
        }

        public void UpdateCustomer(Customer customer)
        {
            _repository.Update(customer);
        }
    }
}
