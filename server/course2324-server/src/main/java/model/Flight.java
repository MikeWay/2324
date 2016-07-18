package model;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the flights database table.
 * 
 */
@Entity
@Table(name="flights")
@NamedQuery(name="Flight.findAll", query="SELECT f FROM Flight f")
public class Flight implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(unique=true, nullable=false)
	private int id;

	@Column(nullable=false)
	private short aircraftKey;

	@Column(nullable=false, length=10)
	private String arriveDay;

	@Column(nullable=false, length=5)
	private String arriveTime;

	@Column(nullable=false, length=10)
	private String departDay;

	@Column(nullable=false, length=5)
	private String departTime;

	@Column(nullable=false, length=3)
	private String destination;

	@Column(nullable=false)
	private int flightNumber;

	@Column(nullable=false, length=3)
	private String origin;

	@Column(nullable=false, precision=10, scale=2)
	private BigDecimal price;

	public Flight() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public short getAircraftKey() {
		return this.aircraftKey;
	}

	public void setAircraftKey(short aircraftKey) {
		this.aircraftKey = aircraftKey;
	}

	public String getArriveDay() {
		return this.arriveDay;
	}

	public void setArriveDay(String arriveDay) {
		this.arriveDay = arriveDay;
	}

	public String getArriveTime() {
		return this.arriveTime;
	}

	public void setArriveTime(String arriveTime) {
		this.arriveTime = arriveTime;
	}

	public String getDepartDay() {
		return this.departDay;
	}

	public void setDepartDay(String departDay) {
		this.departDay = departDay;
	}

	public String getDepartTime() {
		return this.departTime;
	}

	public void setDepartTime(String departTime) {
		this.departTime = departTime;
	}

	public String getDestination() {
		return this.destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getFlightNumber() {
		return this.flightNumber;
	}

	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getOrigin() {
		return this.origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public BigDecimal getPrice() {
		return this.price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

}