"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const flight_1 = require("./flight");
let axiosInstance;
const flight = new flight_1.Flight(666, 'flightNumber', 'origin', 'destination', 'departDay', 'departTime', 'arriveDay', 'arriveTime', 99.99);
const flight2 = new flight_1.Flight(667, 'flightNumber1', 'origin1', 'destination1', 'departDay1', 'departTime1', 'arriveDay1', 'arriveTime1', 99.99);
const account1 = {
    firstName: 'Maurice',
    familyName: 'Mouse',
    email: 'x@xx.com',
    address1: 'Address 1',
    address2: 'Address 2',
    city: 'NYC',
    postCode: 'ZIP999'
};
describe('API Server', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        axiosInstance = yield axios_1.default.create({
            responseType: 'json',
        });
        yield axiosInstance.delete('http://localhost:8080/flightserver/myflights');
        yield axiosInstance.delete('http://localhost:8080/flightserver/account');
    }));
    it('should get a response to GET - if the server is running!', () => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/flights');
        //console.log(response.statusText);
        expect(response).withContext('Did you start the Flights service? Try npm run serve').toBeTruthy();
    }));
    it('should get a response to GET with a filter', () => __awaiter(void 0, void 0, void 0, function* () {
        const FLIGHT_COUNT = 20;
        const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
        //console.log(response.data);
        expect(response.data.length).toBe(FLIGHT_COUNT);
    }));
    it('should get the correct number of flights back with a filter set', () => __awaiter(void 0, void 0, void 0, function* () {
        const FLIGHT_COUNT = 20;
        const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=JFK`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
        expect(response.data.length).toBe(FLIGHT_COUNT);
    }));
    it('should flights matching the org and dest filters', () => __awaiter(void 0, void 0, void 0, function* () {
        const FLIGHT_COUNT = 20;
        const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=JFK&origin=LHR`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
        //console.log(response.data);
        let flights = response.data;
        for (let flight of flights) {
            expect(flight.origin).toBe('LHR');
            expect(flight.destination).toBe('JFK');
        }
    }));
    it('should zero flights back with a filter set to nonsense', () => __awaiter(void 0, void 0, void 0, function* () {
        const FLIGHT_COUNT = 20;
        const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=666&origin=LHR`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
        //console.log(response.data);
        expect(response.data.length).toBe(0);
    }));
    it('should get filtered flights with GET', () => __awaiter(void 0, void 0, void 0, function* () {
        const FLIGHT_COUNT = 20;
        const QUERY_STRING = `?start=0&num=${FLIGHT_COUNT}&dest=JFK&origin=LHR`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/flights' + QUERY_STRING);
        //console.log(response.data);
        expect(response.data.length).toBe(20);
    }));
    it('should add a flight to mFlights', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight)), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(res.data).toBe(1);
    }));
    it('should add 2 flights to mFlights', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight, flight2)), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(res.data).toBe(2);
    }));
    it('should fetch 2 flights from mFlights', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight, flight2)), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/myflights');
        expect(response.data.length).toBe(2);
    }));
    it('should fetch the correct flights from mFlights', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield axiosInstance.post('http://localhost:8080/flightserver/myflights', JSON.stringify(new Array(flight, flight2)), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/myflights');
        let flights = response.data;
        expect(flights[0].id).toBe(flight.id);
        expect(flights[1].id).toBe(flight2.id);
    }));
    it('should count flights', () => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/numflights');
        const count = response.data;
        expect(count).toBe(4732);
    }));
    it('should count flights with an origin filter', () => __awaiter(void 0, void 0, void 0, function* () {
        const QUERY_STRING = `?origin=JFK`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/numflights' + QUERY_STRING);
        const count = response.data;
        expect(count).toBe(434);
    }));
    it('should count flights with an destination filter', () => __awaiter(void 0, void 0, void 0, function* () {
        const QUERY_STRING = `?dest=JFK`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/numflights' + QUERY_STRING);
        const count = response.data;
        expect(count).toBe(329);
    }));
    it('should count flights with an org and destination filter', () => __awaiter(void 0, void 0, void 0, function* () {
        const QUERY_STRING = `?dest=JFK&origin=LHR`;
        let response = yield axiosInstance.get('http://localhost:8080/flightserver/numflights' + QUERY_STRING);
        const count = response.data;
        expect(count).toBe(35);
    }));
    it('should update account details', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield axiosInstance.put('http://localhost:8080/flightserver/account', JSON.stringify(account1), {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(res.data).toBe(true);
        res = yield axiosInstance.get('http://localhost:8080/flightserver/account');
        const account = res.data;
        expect(account).toEqual(account1);
    }));
    it('should fetch no account details until some have been added!', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield axiosInstance.get('http://localhost:8080/flightserver/account');
        const account = res.data;
        expect(account.firstName).toBeUndefined();
        expect(account.familyName).toBeUndefined();
        expect(account).toEqual({});
    }));
});
