using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_rest.Domain.Models;

namespace api_rest.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<User> FirstOrDefaultAsync(String login, String password);
        
    }
}
