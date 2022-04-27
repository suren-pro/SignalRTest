using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;

namespace SignalRTest.Controllers
{
    [ApiController]
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IHubContext<OrderHub> hub;

        public WeatherForecastController(ILogger<WeatherForecastController> logger,IHubContext<OrderHub> hub)
        {
            _logger = logger;
            this.hub = hub;
        }
        [HttpGet("SendNotification")]
        public async Task<IActionResult> SendNotification()
        {
            await hub.Clients.All.SendAsync("SendNotification","Edo");
            return Ok();
        }
        [HttpGet("ws")]
        public async Task Get()
        {
            await hub.Clients.All.SendAsync("SendNotification", new { Message = "Message" });
        }

    }
        
    
}
