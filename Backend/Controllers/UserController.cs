using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShareIt.Context;
using ShareIt.Helpers;
using ShareIt.Models;

namespace ShareIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _authContext;
        public UserController(AppDbContext appDbContext)
        {
            _authContext = appDbContext;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            if(userObj == null)
            {
                return BadRequest();
            }
            var user = await _authContext.Users.FirstOrDefaultAsync(x=>x.Email == userObj.Email && x.Password == userObj.Password);
            if (user == null)
                return NotFound(new { Message = "User Not Found!" });
            return Ok(new
            {
                Message = "Login Success"
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if(userObj==null)
                return BadRequest();

            //Check username
            if (await CheckUserNameExistAsync(userObj.Username))
                return BadRequest(new { Message = "Username Already Exist" });

            //Check email
            if (await CheckEmailExistAsync(userObj.Email))
                return BadRequest(new { Message = "Email Already Exist" });


            userObj.Password = PasswordHasher.HashPassword(userObj.Password);
            userObj.Role = "User";
            userObj.Token = "";
            await _authContext.Users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "User Registered!"
            });
        }
        private Task<bool> CheckUserNameExistAsync(string username)
           => _authContext.Users.AnyAsync(x => x.Username == username);
        private Task<bool> CheckEmailExistAsync(string email)
           => _authContext.Users.AnyAsync(x => x.Email == email);

    }
}
