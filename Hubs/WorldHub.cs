using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using WorldOfAvatars.Data;

namespace WorldOfAvatars.Hubs
{
    public class WorldHub : Hub
    {
        public const string HubUrl = "/world";
        // public async Task Broadcast(List<Avatar> avatars)
        // {
        //     await Clients.All.SendAsync("Broadcast", avatars);
        // }

        public async Task Broadcast(Avatar myAvatar)
        {
            await Clients.All.SendAsync("Broadcast", myAvatar);
        }

        public override Task OnConnectedAsync()
        {
            Console.WriteLine($"{Context.ConnectionId} connected");
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception? e)
        {
            Console.WriteLine($"Disconnected {e?.Message} {Context.ConnectionId}");
            return base.OnDisconnectedAsync(e);
        }
    }
}