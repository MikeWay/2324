package course.lt2324.flightserver;

public class FlightsRequest {
	
	
	private int start;
	private int num;	
	
	public FlightsRequest() {}	
	
	public FlightsRequest(int start, int num) {

		this.start = start;
		this.num = num;
	}

	
	
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	
}
