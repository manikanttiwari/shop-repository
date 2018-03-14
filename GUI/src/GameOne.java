import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class GameOne extends JFrame {

	//private JPanel contentPane;
	static final int BOARD_WIDTH=500;
	static final int BOARD_HEIGHT=500;
	
	public static void main(String[] args) {
		
		GameOne frame = new GameOne();
		frame.setVisible(true);
	}
	
	private void askForClose(){
		int choice = JOptionPane.showConfirmDialog(this,
				"Do u really want to close this window"
				,"My Gaming",JOptionPane.YES_NO_OPTION);
				if(choice == JOptionPane.YES_OPTION){
					this.setVisible(false);
					this.dispose();
				}
				else
				if(choice == JOptionPane.NO_OPTION){	
					return;
				}
	}

	
	//adapter class-it is a class who implements all the methods of interface
	//whenever u want to use the methods use my adapter class (abstract class)instead of interface
	//b'coz i the interface(window listener there is seven methods to use)
	//if we do not use adapter class instead of window listener (interface) then we have to make seven classes
	public GameOne() {
		
		//System.out.println("game one constructor called");
		this.addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent arg0) {
				askForClose();
			}
		});
		setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
		//setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		//setBounds(100, 100, 450, 300);
		this.setSize(BOARD_WIDTH,BOARD_HEIGHT);
		this.setLocationRelativeTo(null);
		this.setTitle("                                                            SKY WAR");
		//we REMOVED the content pane(JPanel) that's why we can add board on which we can give some region on our frame for our game 
		//contentPane = new JPanel();
		//contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		//setContentPane(contentPane);
		//this.getContentPane.setLayout(null);
		
		//we delete all the panels on the frame
		//and add board on the frame
		
		Board board =new Board();
		this.getContentPane().add(board);//this will be seen into the frame
	}

}
