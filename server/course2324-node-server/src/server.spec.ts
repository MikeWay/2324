import axios, { AxiosInstance } from 'axios';
import { stopCoverage } from 'v8';
import { Flight } from './flight';
import { startServer, stopServer } from './server';
import { flights } from './state';

let axiosInstance: AxiosInstance;
const flight = new Flight(666, 'flightNumber', 'origin', 'destination', 'departDay', 'departTime', 'arriveDay', 'arriveTime', 99.99);
const flight2 = new Flight(667, 'flightNumber1', 'origin1', 'destination1', 'departDay1', 'departTime1', 'arriveDay1', 'arriveTime1', 99.99);

describe('API Server', () => {

  beforeEach(async () => {
    axiosInstance = await axios.create({
      responseType: 'json',
      
    });
    await axiosInstance.delete('http://localhost:8080/flightserver/myflights');
  });

  it('should get a response to GET - if the server is running!', async () => {
    let response = await axiosInstance.get('http://localhost:8080/flightserver/flights');
    //console.log(response.statusText);
    expect(response).withContext('Did you start the Flights service? Try npm run serve').toBeTruthy();
  });

  it('should get a response to GET with a filter', async () => {
    const FLIGHT_COUNT = 20;
    const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
    //console.log(response.data);
    expect(response.data.length).toBe(FLIGHT_COUNT);
  });


  it('should get the correct number of flights back with a filter set', async () => {
    const FLIGHT_COUNT = 20;
    const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=JFK`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
    expect(response.data.length).toBe(FLIGHT_COUNT);
  });

  it('should flights matching the org and dest filters', async () => {
    const FLIGHT_COUNT = 20;
    const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=JFK&origin=LHR`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
    //console.log(response.data);
    let flights = response.data as Flight[];
    for (let flight of flights) {
      expect(flight.origin).toBe('LHR');
      expect(flight.destination).toBe('JFK');
    }
  });

  it('should zero flights back with a filter set to nonsense', async () => {
    const FLIGHT_COUNT = 20;
    const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=666&origin=LHR`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
    //console.log(response.data);
    expect(response.data.length).toBe(0);
  });

  it('should get filtered flights with GET', async () => {
    const FLIGHT_COUNT = 20;
    const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=JFK&origin=LHR`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
    //console.log(response.data);
    expect(response.data.length).toBe(20);
  });

  it('should add a flight to mFlights', async () => {
    let res = await axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight)), {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    expect(res.data).toBe(1);
  })

  it('should add 2 flights to mFlights', async () => {
    let res = await axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight, flight2)), {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    expect(res.data).toBe(2);
  })

  it('should fetch 2 flights from mFlights', async () => {
    let res = await axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight, flight2)), {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    let response = await axiosInstance.get('http://localhost:8080/flightserver/myflights');
    expect(response.data.length).toBe(2);

  })  

  it('should fetch the correct flights from mFlights', async () => {
    let res = await axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight, flight2)), {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    let response = await axiosInstance.get('http://localhost:8080/flightserver/myflights');
    let flights = response.data as Flight[];
    expect(flights[0].id).toBe(flight.id);
    expect(flights[1].id).toBe(flight2.id);
  })    

  it('should count flights', async () => {
    let response = await axiosInstance.get('http://localhost:8080/flightserver/numflights');
    const count = response.data as number;
    expect(count).toBe(4732);
  });

  it('should count flights with an origin filter', async () => {
    const QUERY_STRING = `?origin=JFK`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/numflights' + QUERY_STRING);
    const count = response.data as number;
    expect(count).toBe(434);
  });

  it('should count flights with an destination filter', async () => {
    const QUERY_STRING = `?dest=JFK`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/numflights' + QUERY_STRING);
    const count = response.data as number;
    expect(count).toBe(329);
  });  

  it('should count flights with an org and destination filter', async () => {
    const QUERY_STRING = `?dest=JFK&origin=LHR`;
    let response = await axiosInstance.get('http://localhost:8080/flightserver/numflights' + QUERY_STRING);
    const count = response.data as number;
    expect(count).toBe(35);
  });    
});
