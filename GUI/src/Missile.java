import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.ImageObserver;

import javax.swing.ImageIcon;
import java.awt.Color;

public class Missile {
	
	Plane plane = new Plane();
	private int x;
	private int y;
	private Image image ;
	//it convert icon into image.
	private int width;
	private int height;
	 boolean isVisible = true;//it will not be private because it should be accessed by another class
	private int velX;
	private int velY;
	int t = plane.getY();
	Graphics s;
	public Missile(){
	
	image = new ImageIcon(Missile.class.getResource("icon")).getImage();//getImage() converts icon into image
//	 width = image.getWidth(null);
//	 height = image.getHeight(null);
	 isVisible=true;
	 
	paintComponent(s);
	}
	
	private void paintComponent( Graphics p) {
		// TODO Auto-generated method stub
		//public void paintComponent(Graphics p){
		for(x=plane.getX();x<500;x++) {
			this.paintComponent(p);
			Graphics2D twoD = (Graphics2D)p;
		//	if(plane.isVisible()){
			if(this.isVisible){
			twoD.drawImage(image, x, t, (ImageObserver) this);
		  }
	}
	}
	public int getX() {
		return x;
	}
	public void setX(int x) {
		this.x = x;
	}
	public int getY() {
		return y;
	}
	public void setY(int y) {
		this.y = y;
	}
	public Image getImage() {
		return image;
	}
	public void setImage(Image image) {
		this.image = image;
	}
	public int getWidth() {
		return width;
	}     
	public void setWidth(int width) {
		this.width = width;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public boolean isVisible() {
		return isVisible;
	}
	public void setVisible(boolean isVisible) {
		this.isVisible = isVisible;
	}

	
}
	

