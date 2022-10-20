﻿using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace ShareIt.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        public string? Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    
        public string? Token { get; set; }
        
        public string? Role { get; set; }
    }
}
