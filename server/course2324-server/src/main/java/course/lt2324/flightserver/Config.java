package course.lt2324.flightserver;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableAutoConfiguration
@ComponentScan
@EntityScan(basePackages = { "model" })
@EnableJpaRepositories(basePackages = { "course.lt2324.flightserver" })
@EnableTransactionManagement
public class Config {

}
