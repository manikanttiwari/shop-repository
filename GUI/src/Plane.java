import java.awt.Image;
import java.awt.event.KeyEvent;

import javax.swing.ImageIcon;

public class Plane {
	private int x;
	private int y;
	private Image image ;
	//it convert icon into image.
	private int width;
	private int height;
	 boolean isVisible;//it will not be private because it should be accessed by another class
	private int velX;
	private int velY;
	
	public void dontMove(){
		velX=0;
		velY=0;
	}
	
public void direction(KeyEvent e){
	velX=0;	//whenever we press continuously the key it will call the direction method and set the velX and velY as zero
	velY=0;	// if we do not use this two lines then values of velX and velY will remain same and plane will move in y=x direction;
	if(e.getKeyCode() == KeyEvent.VK_UP){
		if(y==0)
			velY=0;
		else 
			
		velY = -1;
	}
		else
			if(e.getKeyCode() == KeyEvent.VK_DOWN){	
				if(y==420)
					velY =0;
					else
				velY = 1;
			}
			else
			if(e.getKeyCode()==KeyEvent.VK_LEFT){
				if(x==5){
					velX = 0;
				}
				else{
				velX = -1;
				}
				}
			else
			if(e.getKeyCode()==KeyEvent.VK_RIGHT){
				if(x ==GameOne.BOARD_WIDTH-image.getWidth(null)-1){
					velX =0;
				}
				else
				if(e.getKeyCode()==KeyEvent.VK_SHIFT){
				Missile missile = new Missile();
				}
				else{
					velX=1;
				}
	}
	//move();
	}
public void move(){
	if(y==0 || y==420 || x==2 || x==GameOne.BOARD_WIDTH-image.getWidth(null)-1){
		velY=0;
		velX=0;
	}
	y = y + velY;
	x = x + velX;
	
	
}
public Plane() {
	x=50;
	y=100;
	System.out.println("plane called");
	image = new ImageIcon(Plane.class.getResource("helicopter.png")).getImage();//getImage() converts icon into image
	
	 width = image.getWidth(null);
	 height = image.getHeight(null);
	 isVisible=true;
				//observer only checks the image size either the image is increasing or not
				//as listener move while pressing the keys in same manner observer moves while changing in the width and height of image
				//i.e when images changes according the resolution of the operating system
				
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
