using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Dws.Note_one.Api.Extension
{
    public static class ModelStateExtension
    {
        public static List<string> GetErrorMessages(this ModelStateDictionary dictionary)
        {
            return dictionary.SelectMany(m => m.Value.Errors)
                             .Select(m => m.ErrorMessage)
                             .ToList();
        }
    }
}