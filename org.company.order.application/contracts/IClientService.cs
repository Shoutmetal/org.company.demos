using org.company.order.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.application.contracts
{
    public interface IClientService
    {
        void AddClient(Client client);
        IEnumerable<Client> GetClients();
        Client GetClientById(int id);
        void UpdateClient(Client client);
    }
}
