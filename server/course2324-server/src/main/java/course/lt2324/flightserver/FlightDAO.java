package course.lt2324.flightserver;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.Flight;

@Repository

public interface FlightDAO extends CrudRepository<Flight, Long> {
	
	Iterable<Flight> findAll();

}
