using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRTest
{
    public class OrderHub:Hub
    {
        public OrderHub()
        {
           
        }
        public override Task OnConnectedAsync()
        {
            //string uid = Context.GetHttpContext().Request.Query["uid"];
            //string id = Context.ConnectionId;
            return base.OnConnectedAsync();
        }
        public async Task Join(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await Clients.Client(Context.ConnectionId).SendAsync("getResponse","barev");
        }
        public async Task SendMerchantMessage(string connectionId, string message,string group)
        {
            await Clients.Client(connectionId).SendAsync("getResponse", message);
        }
    }
}
