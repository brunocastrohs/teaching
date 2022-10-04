using Dws.Note_one.Api.Domain.Models;

namespace Dws.Note_one.Api.Persistence.Repositories.IRepositories
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> ListAsync();
        Task AddAsync(Category category);
        Task<Category> FindByIdAsync(int id);
        void Update(Category category);

        void Remove(Category category);

    }
}