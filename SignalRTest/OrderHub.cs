using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRTest
{
    public class OrderHub:Hub
    {
        public OrderHub()
        {
           
        }
        public async Task<string> Join(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId,groupName);
            return Context.ConnectionId;
        }
        public async Task SendMerchantMessage(string connectionId, string message,string group)
        {
            await Clients.Client(connectionId).SendAsync("", message);
        }
    }
}
