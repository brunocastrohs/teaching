using System;

namespace ArticleApp.API.Models{
    public class Article{
        public int Id {get;set;}
        public string Name {get;set;}
        public string Description {get;set;}
        public DateTime ArticleDate {get;set;}
    }
}