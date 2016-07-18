package course.lt2324.weatherserver;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan
//@EntityScan(basePackages = { "model" })
//@EnableJpaRepositories(basePackages = { "course.lt2324.flightserver" })
//@EnableTransactionManagement
public class Config {

}
