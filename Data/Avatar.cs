using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorldOfAvatars.Data
{
    
    public class Avatar
    {
        public DateTime Created { get; set; } = DateTime.Now;
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string? UserName { get; set; }
        public string? AvatarSvg { get; set; }
        public bool Mine { get; set; } = false;

        public float X { get; set; }
        public float Y { get; set; }
        public float Z { get; set; }

        // public Avatar(string userName, string avatarSvg, bool mine)
        // {
        //     UserName = userName;
        //     AvatarSvg = avatarSvg;
        //     Mine = mine;
        // }
        public bool IsNotice => AvatarSvg!.StartsWith("[Notice]");
        public string CSS => Mine ? "sent" : "received";
    }
}