using AutoMapper;
using Dws.Note_one.Api.Resource;
using Dws.Note_one.Api.Domain.Models;

namespace Dws.Note_one.Api.Extension
{
    
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<SaveCategoryResource, Category>();
        }
    }

}