using org.company.order.application.contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using org.company.order.entities;
using org.company.order.domain.contracts.repository;
using org.company.order.domain.generic;

namespace org.company.order.application.implementation
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository _repository;
        private readonly IUnitOfWork _uof;

        public ClientService(IClientRepository repository, IUnitOfWork uof)
        {
            _repository = repository;
            _uof = uof;
        }

        public void AddClient(Client client)
        {
            _repository.Add(client);
            _uof.Commit();
        }

        public IEnumerable<Client> GetClients()
        {
            return _repository.GetAll();
        }

        public Client GetClientById(int id)
        {
            return _repository.GetSingle(c => c.ClientId == id);
        }

        public void UpdateClient(Client client)
        {
            _repository.Update(client);
        }
    }
}
