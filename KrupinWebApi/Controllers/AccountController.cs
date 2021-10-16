using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KrupinWebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class AccountController : ControllerBase
    {

        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;
        public AccountController(UserManager<IdentityUser> userMgr, SignInManager<IdentityUser> signinMgr)
        {
            userManager = userMgr;
            signInManager = signinMgr;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Login()
        {
            IdentityUser user = await userManager.FindByNameAsync("admin");

            if (User.Identity.IsAuthenticated)
            {
                return Content(User.Identity.Name);
            }
            else
            {
                await signInManager.SignOutAsync();
                Microsoft.AspNetCore.Identity.SignInResult result = await signInManager.PasswordSignInAsync(user, HttpContext.Request.Query["key"].ToString(), false, false);
                if (result.Succeeded)
                {
                    return Redirect("Account/");
                }

                return Unauthorized();
            }

        }
        
    }

    //public class key
    //{
    //    public string Password { get; set; }
    //}
}
