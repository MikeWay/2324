package course.lt2324.flightserver;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Iterables;

import model.Flight;

/**
 * Sample controller for going to the home page with a message
 */
@RestController
@CrossOrigin
public class HomeController {

	@Autowired
	FlightDAO dao;
	
	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);

	
	@RequestMapping("/")
	String home() {
		return "redirect:/index.html";
	}
	
	/**
	 * Return the first 100 flights only
	 */
	@RequestMapping(value = "/flights", method = RequestMethod.GET)
	public Flight[] get100Flights(Model model) {
		logger.info("Requesting 100 flights");

		Flight[] flights = Iterables.toArray(dao.findAll(), Flight.class);
		return Arrays.copyOfRange(flights, 0, 100);
	}

	
	/**
	 * Return a specified number of flights from a start index
	 */
	@RequestMapping(value = "/flights", method = RequestMethod.POST)
	public Flight[] getFlights(@RequestBody FlightsRequest request) {
		logger.info("Requesting " + request.getNum() + " flights");

		Flight[] flights = Iterables.toArray(dao.findAll(), Flight.class);
		return Arrays.copyOfRange(flights, request.getStart(), request.getStart() + request.getNum());
	}	
	
	/**
	 * Return all flights
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/allflights", method = RequestMethod.GET)
	public Flight[] allFlights(Model model) {
		logger.info("Requesting all flights");

		return  Iterables.toArray(dao.findAll(), Flight.class);
	}	

	
	@RequestMapping(value = "/numflights", method = RequestMethod.GET)
	public int getNumFlights(Model model) {
		logger.info("Requesting number flights");

		return  Iterables.toArray(dao.findAll(), Flight.class).length;
	}	
	
	
	/**
	 * Selects the home page and populates the model with a message
	 */
	@RequestMapping(value = "/flightssec", method = RequestMethod.GET)
	public Flight[] flightsSec(Model model) {
		logger.info("Requesting flights");

		return Iterables.toArray(dao.findAll(), Flight.class);
	}
}
