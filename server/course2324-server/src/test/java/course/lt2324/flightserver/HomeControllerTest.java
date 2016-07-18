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
		Flight[] flights = controller.home(model);
		assertNotNull("Expected some flights", flights);

		
	}
}
