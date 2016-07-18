package model;

public class Preferences {
	private String name;
    private String location;
    private String temperatureUnits;
    private String speedUnits;
    private int forecastLength;
    
    public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTemperatureUnits() {
		return temperatureUnits;
	}
	public void setTemperatureUnits(String temperatureUnits) {
		this.temperatureUnits = temperatureUnits;
	}
	public String getSpeedUnits() {
		return speedUnits;
	}
	public void setSpeedUnits(String speedUnits) {
		this.speedUnits = speedUnits;
	}
	public int getForecastLength() {
		return forecastLength;
	}
	public void setForecastLength(int forecastLength) {
		this.forecastLength = forecastLength;
	}

}
