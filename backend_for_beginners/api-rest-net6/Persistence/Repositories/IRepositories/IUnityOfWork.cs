
namespace Dws.Note_one.Api.Persistence.Repositories.IRepositories
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}