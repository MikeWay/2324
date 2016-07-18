package course.lt2324.flightserver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Iterables;

import model.Flight;

/**
 * Sample controller for going to the home page with a message
 */
@RestController
@CrossOrigin
public class WeatherController {

	@Autowired
	FlightDAO dao;
	
	private static final Logger logger = LoggerFactory
			.getLogger(WeatherController.class);

	
	/**
	 * Selects the home page and populates the model with a message
	 */
	@RequestMapping(value = "/weather", method = RequestMethod.GET)
	public Flight[] home(Model model) {
		logger.info("Requesting flights");

		return Iterables.toArray(dao.findAll(), Flight.class);
	}

}
