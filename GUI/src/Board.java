import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
//import java.awt.Image;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

//import javax.swing.ImageIcon;
import javax.swing.JPanel;
import javax.swing.Timer;

public class Board extends JPanel {
	private Timer timer;
	Plane plane;
	Enemy enemy;
	final int DELAY = (int) 0.1;
	public void updateGame1(){
		timer = new Timer(DELAY,new ActionListener(){
			public void actionPerformed(ActionEvent e){
				plane.move();
		
				System.out.println("Timer Calling...");
				repaint();//it will call the paint component again and again
			}});
		
		timer.start();
	}
	
	
	@Override
	public void paintComponent(Graphics g){
		super.paintComponent(g);
		Graphics2D twoD = (Graphics2D)g;
		if(plane.isVisible()){
		twoD.drawImage(plane.getImage(), plane.getX(), plane.getY(), this);
		}
		// My Painting
	}		//paint component is only for the drawing the image not the icon
				//icon can only be set on any label or any button
				//image is not to be set but to be drawn
	
	
	public Board(){
		//board is working as a panel 
		//System.out.println("board called");
		 plane=new Plane();
		this.setLayout(null);
		this.setBounds(0,0,GameOne.BOARD_WIDTH,GameOne.BOARD_HEIGHT);
		this.setBackground(Color.CYAN);
		this.setFocusable(true);
		this.addKeyListener(new KeyAdapter(){//"this" means key listener is working on the panel
			public void keyPressed(KeyEvent e){
				//when we use keypress we get its keycode (ASCII value) and keychar
				//bit key type only charecter
				plane.direction(e);
				//System.out.println(e.getKeyCode()+" "+e.getKeyChar());
			}
				@Override
				public void keyReleased(KeyEvent e){
					plane.dontMove();
				}
			
		}
				
				);
		updateGame1();
	
	}
}

