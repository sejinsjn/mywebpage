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
        return "index";
    }

    @GetMapping("/for-trade")
    public String fortrade(Model model) throws GeneralSecurityException, IOException {
        model.addAttribute("gen8", sheets.getData("Gen 8!A1:R"));
        model.addAttribute("gen7", sheets.getData("Gen 7!A1:R"));
        model.addAttribute("shinymyths", sheets.getData("Shiny Mythicals!A1:R"));
        model.addAttribute("shinyeggs", sheets.getData("Shiny Eggs!A1:R"));
        return "fortrade.html";
    }

    @GetMapping("/pokemon")
    public String pokemon(Model model) throws GeneralSecurityException, IOException {
        return "pokemon.html";
    }
}