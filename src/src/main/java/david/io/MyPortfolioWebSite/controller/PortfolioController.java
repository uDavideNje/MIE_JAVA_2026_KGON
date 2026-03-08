package david.io.MyPortfolioWebSite.controller;

import ch.qos.logback.core.model.Model;
import david.io.MyPortfolioWebSite.model.ContactForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {
    @GetMapping("/")
    public String home(Model model) {
        return "index"; // loads templates/index.html
    }

}

