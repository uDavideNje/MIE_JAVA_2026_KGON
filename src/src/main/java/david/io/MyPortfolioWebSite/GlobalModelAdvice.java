package david.io.MyPortfolioWebSite;

import david.io.MyPortfolioWebSite.model.ContactForm;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class GlobalModelAdvice {
    @ModelAttribute("contactForm")
    public ContactForm contactForm() {
        return new ContactForm();
    }
}
