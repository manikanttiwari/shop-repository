import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.EventQueue;
import java.awt.Window;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.JPasswordField;
import javax.swing.JButton;
public class LoginFrame extends JFrame {
	private JPanel contentPane;
	private static JPasswordField passwordField;
	private static JTextField useridField;
private void login()
{	
	String UserId=useridField.getText();
String Password=passwordField.getText();
if(UserId.length()==0 && Password.length()==0 )
	JOptionPane.showMessageDialog(this, "Userid and password is required");
else if(UserId.equals(Password))
{
	this.setVisible(false);
this.dispose();
	WelcomeScreen screen = new WelcomeScreen(UserId);
	screen.setVisible(true);
}
	else if(UserId.length()==0)
	{
		JLabel l = new JLabel();
		l.setBounds(145, 103, 123, 17);
		contentPane.add(l);
		l.setText("enter the user id");	
	}
	else if(Password.length()==0)
		{
		JLabel l  = new JLabel();
		l.setBounds(135, 172, 119, 14);
		contentPane.add(l);
		l.setText("password is required");
		}
else{
	JOptionPane.showMessageDialog(this, "Invalid Userid or Password");
}
}

//private void error()
//{	
//	String UserId=useridField.getText();
//	useridField.setText("");
//String Password=passwordField.getText();
//passwordField.setText("");
//}

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
					LoginFrame frame = new LoginFrame();
					frame.setVisible(true);				
	}
	/**
	 * Create the frame.
	 */
	public LoginFrame() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblMyScreen = new JLabel("My Screen");
		lblMyScreen.setBounds(181, 11, 73, 14);
		contentPane.add(lblMyScreen);
		
		JLabel UserId = new JLabel("User Id");
		UserId.setBounds(33, 81, 46, 14);
		contentPane.add(UserId);
		
		JLabel Password = new JLabel("Password");
		Password.setBounds(33, 144, 46, 14);
		contentPane.add(Password);
		
		passwordField = new JPasswordField();
		passwordField.setBounds(135, 144, 86, 17);
		contentPane.add(passwordField);
		
		JButton btnLogin = new JButton("Login");
		btnLogin.setBounds(37, 212, 89, 23);
		contentPane.add(btnLogin);
		btnLogin.addActionListener(new ActionListener(){
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				login();
			}
		});
		JButton btnCancel = new JButton("Cancel");
		btnCancel.setBounds(191, 212, 89, 23);
		contentPane.add(btnCancel);
//		btnLogin.addActionListener(new ActionListener(){
//			
//
//			@Override
//			public void actionPerformed(ActionEvent e) {
//				// TODO Auto-generated method stub
//			 error();
//				
//			}
//		});		
//		
		useridField = new JTextField();
		useridField.setBounds(135, 78, 86, 20);
		contentPane.add(useridField);
		useridField.setColumns(10);
	}
}
