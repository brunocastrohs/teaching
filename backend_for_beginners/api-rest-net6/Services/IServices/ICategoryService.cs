using Dws.Note_one.Api.Domain.Models;
using Dws.Note_one.Api.Services.Communication;

namespace Dws.Note_one.Api.Services.IServices
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> ListAsync();
        Task<CategoryResponse> SaveAsync(Category category);

        Task<CategoryResponse> UpdateAsync(int id, Category category);

        Task<CategoryResponse> DeleteAsync(int id);


    }
}