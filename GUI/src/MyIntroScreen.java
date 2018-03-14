//to make this file runnable goto gui->right click->export->java->runnable jar->
//first file name where this will execute first->brows->select where to save
//jar to exe converter
//to add mp3 jar file do google jaco Mp3 library for java
//again GUI properties java build path then library then add jar then add and finish
//select one song and paste it on src
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JProgressBar;
import javax.swing.JWindow;
import javax.swing.Timer;
import javax.swing.border.EmptyBorder;

import jaco.mp3.player.MP3Player;

public class MyIntroScreen extends JWindow {
	Timer timer;
	private boolean isVisible=false;
	private final int DELAY=100;
	JLabel lblGameOn = new JLabel("Game On");
	JLabel photo = new JLabel("");
	private JPanel contentPane;
//	MP3Player player;
	private int counter = 1;
	
	
	private final JProgressBar progressBar = new JProgressBar();
	public static void main(String[] args) {
		
		MyIntroScreen frame = new MyIntroScreen();
		frame.setVisible(true);
		frame.animation();
		
		
	}
//	private void playSong(){
//		player = new MP3Player(MyIntroScreen.class.getResource("gana.mp3"));
//		player.play();
//	}
	
	private void animation(){
ActionListener action = new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				lblGameOn.setVisible(isVisible);
				isVisible = !isVisible;//this line is performed after each 1 second after the above line
				progressBar.setValue(counter);
				if(counter>=100){
					timer.stop();
					//player.stop();
					MyIntroScreen.this.setVisible(false);
					LoginFrame frame = new LoginFrame();
					frame.setVisible(true);
				}
				counter++;
			}
};
		timer = new Timer(DELAY,action);
		timer.start();//this will make one core busy
		//loop cannot be used for this animation
		//because loop always start from the main by calling the function of loop
		//the loop start parallel with the main on one processor
		//but main is also busy with a processor 
		//and loop also will start running on that processor 
		//if that core is busy then the effect of the animation cannot be appeared
		
	}
	

	public MyIntroScreen() {
		Icon icon=new ImageIcon(MyIntroScreen.class.getResource("game.gif"));
		
		//we dont use absolute path b"coz whenever we want to give our file to another machine then it cannot found that image
		//".class" is used to withdraw the meta information
		//setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBackground(Color.CYAN);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		photo.setIcon(icon);
		photo.setBounds(0, 21, 434, 188);
		contentPane.add(photo);
		
		lblGameOn.setFont(new Font("Tahoma", Font.BOLD, 19));
		lblGameOn.setBounds(164, 202, 166, 32);
		contentPane.add(lblGameOn);
		progressBar.setBounds(0, 236, 434, 14);
		
		contentPane.add(progressBar);
	}
}
