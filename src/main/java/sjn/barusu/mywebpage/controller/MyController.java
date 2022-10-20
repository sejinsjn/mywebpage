package sjn.barusu.mywebpage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import sjn.barusu.mywebpage.sheets.sheets;

import java.io.IOException;
import java.security.GeneralSecurityException;

@Controller
public class MyController {

    @GetMapping("/")
    public String index(Model model) throws GeneralSecurityException, IOException {
        model.addAttribute("gen8", sheets.getData("Gen 8!A1:R23"));
        return "index";
    }
}