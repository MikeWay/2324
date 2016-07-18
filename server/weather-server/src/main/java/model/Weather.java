package model;

import java.util.Date;

public class Weather {
	private Date dateTime;
	private String skyConditions;
	private double airPressure;
	private double windSpeed;
	private double gustSpeed;
	
	public Weather(Date dateTime, String skyConditions, double airPressure, double windSpeed, double gustSpeed) {
		super();
		this.dateTime = dateTime;
		this.skyConditions = skyConditions;
		this.airPressure = airPressure;
		this.windSpeed = windSpeed;
		this.gustSpeed = gustSpeed;
	}
	
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	public String getSkyConditions() {
		return skyConditions;
	}
	public void setSkyConditions(String skyConditions) {
		this.skyConditions = skyConditions;
	}
	public double getAirPressure() {
		return airPressure;
	}
	public void setAirPressure(double airPressure) {
		this.airPressure = airPressure;
	}
	public double getWindSpeed() {
		return windSpeed;
	}
	public void setWindSpeed(double windSpeed) {
		this.windSpeed = windSpeed;
	}
	public double getGustSpeed() {
		return gustSpeed;
	}
	public void setGustSpeed(double gustSpeed) {
		this.gustSpeed = gustSpeed;
	}
	
	

}
