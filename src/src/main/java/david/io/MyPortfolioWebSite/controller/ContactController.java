package david.io.MyPortfolioWebSite.controller;

import david.io.MyPortfolioWebSite.model.ContactForm;
import david.io.MyPortfolioWebSite.service.EmailService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactController {

    private EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }



    @GetMapping("/contact")
    public String showContactPage(Model model) {
        model.addAttribute("contactForm", new ContactForm());
        return "redirect:/"; // contact.html
    }

    @PostMapping("/contact")
    public String handleContact(@ModelAttribute ContactForm form){
        emailService.sendEmail(form.getName(),form.getLastName() , form.getSubject(), form.getMessage(), form.getEmail());
        return "redirect:/";
    }
}
