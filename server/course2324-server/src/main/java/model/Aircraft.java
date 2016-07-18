package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the aircrafts database table.
 * 
 */
@Entity
@Table(name="aircrafts")
@NamedQuery(name="Aircraft.findAll", query="SELECT a FROM Aircraft a")
public class Aircraft implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private short aircraftKey;

	private String description;

	private String url;

	public Aircraft() {
	}

	public short getAircraftKey() {
		return this.aircraftKey;
	}

	public void setAircraftKey(short aircraftKey) {
		this.aircraftKey = aircraftKey;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}