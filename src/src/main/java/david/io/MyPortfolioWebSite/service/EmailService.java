package david.io.MyPortfolioWebSite.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    public void sendEmail(String senderName, String senderLastName, String subject, String body, String senderEmail) {
        logger.info("Attempting to send email from: {}", senderEmail);
        logger.info("Mail config - host: {}", ((JavaMailSenderImpl) mailSender).getHost());
        logger.info("Mail config - port: {}", ((JavaMailSenderImpl) mailSender).getPort());
        logger.info("Mail config - username: {}", ((JavaMailSenderImpl) mailSender).getUsername());
        try{
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("davidtechbuilds@gmail.com");
        message.setSubject("Portfolio Mail : "+subject);
        message.setReplyTo(senderEmail);
        message.setText("From: " +senderName + " " + senderLastName +"\n\n" +body);
        mailSender.send(message);
        logger.info("Email sent successfully!");

    } catch (
    MailException e) {
        logger.error("Failed to send email: {}", e.getMessage());
        logger.error("Full error: ", e);
    }
    }
}
