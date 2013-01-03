using Nancy;
using Nancy.ViewEngines;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HelloNancy
{
    public class MyModule : NancyModule
    {
        public MyModule()
        {
            Get["/"] = p => "Hello, I'm Nancy";
            Get["/nustache"] = parameters =>
            {
                return View["nustache", new { name = "Nancy", value = 1000000 }];
            };
            Get["/{name}/{value}"] = parameters =>
            {
                return View["nustache", parameters];
            };
        }
    }
}