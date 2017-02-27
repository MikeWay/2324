package course.lt2324.flightserver;



import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.ui.Model;

import model.Flight;
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = {Config.class})
public class HomeControllerTest {
	@Autowired
	HomeController controller;
	@Test
	public void testController() {
		Model model = new ExtendedModelMap();
		Flight[] flights = controller.get100Flights(model);
		assertNotNull("Expected some flights", flights);

		
	}
	
	
	@Test
	public void testGetFlights() {
		FlightsRequest request = new FlightsRequest(0,20);
				
		Flight[] flights = controller.getFlights(request);
		assertTrue("Expected 20 flights", flights.length== 20);
	
		request= new FlightsRequest(20,20);
		flights = controller.getFlights(request);
		assertTrue("Expected 20 flights", flights.length== 20);
		assertEquals("Expected first flight id to be 21 " ,  21, flights[0].getId());
	}	
}
