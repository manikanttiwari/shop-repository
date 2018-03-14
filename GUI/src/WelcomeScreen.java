import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JMenuBar;
import javax.swing.JMenu;
import javax.swing.JMenuItem;

public class WelcomeScreen extends JFrame {

	private JPanel contentPane;
	private String UserId;
	private void startGameOne(){
		GameOne gameOne = new GameOne();
		gameOne.setVisible(true);
	}

	public WelcomeScreen(String UserId) {
		this.setExtendedState(JFrame.MAXIMIZED_BOTH);
		this.UserId = UserId;//local userId is set to instance variable.
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		
		JMenuBar menuBar = new JMenuBar();
		this.setJMenuBar(menuBar);  //to show the menu bar on the top;
		
		JMenu mnFile = new JMenu("file");
		menuBar.add(mnFile);
		
		JMenuItem menuItem = new JMenuItem("New menu item");
		mnFile.add(menuItem);
		
		JMenuItem mntmGame_2 = new JMenuItem("GAME3");
		mnFile.add(mntmGame_2);
		
		JMenuItem mntmGame_1 = new JMenuItem("GAME2");
		mnFile.add(mntmGame_1);
		
		JMenuItem mntmGame = new JMenuItem("GAME1");
		mntmGame.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				startGameOne();
			}
		});
		mnFile.add(mntmGame);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JLabel lblWelcome = new JLabel("WELCOME  " + UserId);
		lblWelcome.setFont(new Font("Tahoma", Font.BOLD, 25));
		contentPane.add(lblWelcome, BorderLayout.NORTH);
	}

}
