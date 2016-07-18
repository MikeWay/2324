package course.lt2324.flightserver;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import model.Flight;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = {Config.class})

public class FlightDAOTest {
	
	@Autowired
	private FlightDAO flightDAO;

	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void test() {
		Iterable<Flight> flights = flightDAO.findAll();
		assertNotNull(flights);

		assertNotNull(flights.iterator().next());
		
		Flight flight = flights.iterator().next();
		assertEquals("JFK", flight.getDestination());
	}

}
