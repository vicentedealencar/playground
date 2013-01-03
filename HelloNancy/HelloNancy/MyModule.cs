using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HelloNancy
{
    public class MyModule : NancyModule
    {
        public MyModule() {
            Get["/"] = p => "Hello, I'm Nancy";
        }
    }
}