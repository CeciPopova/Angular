class Ticket{
    destination: string;
    price: number;
    status: string;

   
    constructor(destination: string, price: number, status: string) {
       this.destination = destination;
       this.price = price;
       this.status = status;
    }
}


function getTicketInfo(ticketsData: string[], criteria: string){
    const ticketInfo = ticketsData
    .map(x => x.split('|'))
    .map(([destination, price, status]) => new Ticket(destination, Number(price), status))
    .sort((a, b) => a[criteria].localeCompare(b[criteria]));

    console.log(ticketInfo);
    return ticketInfo;

}


getTicketInfo(
[
    'Philadelphia|94.20|available', 
    'New York City|95.99|available', 
    'New York City|95.99|sold', 
    'Boston|126.20|departed'
], 
'destination');


getTicketInfo(
    [
        'Philadelphia|94.20|available', 
        'New York City|95.99|available', 
        'New York City|95.99|sold', 
        'Boston|126.20|departed'
    ], 
    'status');