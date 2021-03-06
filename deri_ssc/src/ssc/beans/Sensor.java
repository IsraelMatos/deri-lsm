package ssc.beans;


import java.util.Date;


public class Sensor {
	private String id;
	private String name = "";
	private String sensorType = "";
	private String source = "";
	private String sourceType = "";
	private String infor = "";
	private Date times = new Date();
	private String author="admin";
	private String code="";
	private Place place;
	private User user;
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getId() {
		return id;
	}
	
	@SuppressWarnings("unused")
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSensorType() {
		return sensorType;
	}
	public void setSensorType(String sensorType) {
		this.sensorType = sensorType;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getSourceType() {
		return sourceType;
	}
	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}
	public Date getTimes() {
		return times;
	}
	public void setTimes(Date times) {
		this.times = times;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}

	public Place getPlace() {
		return place;
	}

	public void setPlace(Place place) {
		this.place = place;
	}

	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getInfor() {
		return infor;
	}

	public void setInfor(String infor) {
		this.infor = infor;
	}

	@Override
	public boolean equals(Object obj) {
		if(obj == null || (obj instanceof Sensor)){
			return false;
		}
		Sensor source = (Sensor)obj;
		if(source.getSensorType().trim().equals(this.getSensorType().trim())
				&& source.getSourceType().trim().equals(this.getSourceType().trim())
				&& source.getSource().trim().equals(this.getSource().trim())){
			return true;
		}
		
		return false;
	}

	@Override
	public String toString() {
		return 
		  (sensorType.trim().equals("") ? "" : ("sensorType:"+sensorType + ", "))
		+ (sourceType.trim().equals("") ? "" : ("sourceType:"+sourceType + ", ")) 
		+ (source.trim().equals("") ? "" : ("source:"+source + ", ")) ;
	}

}
