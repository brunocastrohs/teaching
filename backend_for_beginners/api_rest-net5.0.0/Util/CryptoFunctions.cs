using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Net.Http;
using System.IO;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using api_rest.Domain.Models;
using Microsoft.Extensions.Configuration;

namespace api_rest.Util
{
    public class CryptoFunctions
    {

        public static string GenerateToken(IConfiguration configuration, User user)
        {
            var s = Encoding.UTF8.GetBytes(configuration["SecurityKey"]);
            SymmetricSecurityKey key = new SymmetricSecurityKey(s);

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            int tokenExpireTimeLapse = int.Parse(configuration["TokenExpireTimeLapse"]);

            var token = new JwtSecurityToken(
                issuer: configuration["Issuer"],
                audience: configuration["Audience"],
                expires: DateTime.Now.AddMinutes(tokenExpireTimeLapse),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
