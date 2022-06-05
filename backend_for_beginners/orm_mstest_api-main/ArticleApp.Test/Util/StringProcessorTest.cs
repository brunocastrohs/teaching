using Microsoft.VisualStudio.TestTools.UnitTesting;
using ArticleApp.API.Util;
using System;

namespace ArticleApp.Test.Util
{
    [TestClass]
    public class StringProcessorTest
    {
        [TestMethod]
        public void StringProcessorTesting()
        {

            string sentence = "Programando seu primeiro teste unitario";

            string d = StringProcessor.ToUpperCase(sentence);

            foreach(char c in d){
                if(c != ' ')
                    Assert.IsTrue(char.IsUpper(c));
            }

        }
    }
}
