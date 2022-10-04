using Dws.Note_one.Api.Persistence.Repositories.IRepositories;
using Dws.Note_one.Api.Persistence.Context;

namespace Dws.Note_one.Api.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;

        public UnitOfWork(AppDbContext context)
        {
            _context = context;     
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}