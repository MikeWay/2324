package course.lt2324.weatherserver;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.Preferences;
import model.Weather;

/**
 * Sample controller for going to the home page with a message
 */
@RestController
@CrossOrigin
public class WeatherController {

	private static final Logger logger = LoggerFactory
			.getLogger(WeatherController.class);

	@RequestMapping("/")
	String home() {
		return "redirect:/index.html";
	}
	
	/**
	 * Returns the latest weather information
	 */
	@RequestMapping(value = "/latest", method = RequestMethod.GET)
	public Weather[] home(Model model) {
		logger.info("Requesting flights");
		return weather;

	}
	
	/**
	 * Accepts the user preferences data
	 * Returns an ID
	 */
	@RequestMapping(path = "/preferences", method = RequestMethod.POST)
	public int savePreferences(@RequestBody Preferences preferences) {
		logger.info("Requesting flights");
		return 5;

	}	

	/**
	 * Accepts the user preferences data
	 * Returns an ID
	 */
	@RequestMapping(path = "/updatePreferences", method = RequestMethod.PUT)
	public int updatePreferences(@RequestBody Preferences preferences) {
		logger.info("Requesting flights");
		return 5;

	}	

	
	Weather[] weather = {new Weather(new Date(), "clear", 1021.0, 18.0, 24.5), 	new Weather(new Date(), "clear", 1029.0, 8.0, 4.5), new Weather(new Date(), "clear", 1036.0, 1.0, 2.5)};
}
