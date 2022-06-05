using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_rest.Communication;
using api_rest.Domain.Models;

namespace api_rest.Domain.Services
{
    public interface IUserService
    {
        Task<User> FirstOrDefaultAsync(String login, String password);

    }
}
