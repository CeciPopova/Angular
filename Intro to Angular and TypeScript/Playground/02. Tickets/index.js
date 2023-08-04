var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function getTicketInfo(ticketsData, criteria) {
    var ticketInfo = ticketsData
        .map(function (x) { return x.split('|'); })
        .map(function (_a) {
        var destination = _a[0], price = _a[1], status = _a[2];
        return new Ticket(destination, Number(price), status);
    })
        .sort(function (a, b) { return a[criteria].localeCompare(b[criteria]); });
    console.log(ticketInfo);
    return ticketInfo;
}
getTicketInfo([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
getTicketInfo([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
