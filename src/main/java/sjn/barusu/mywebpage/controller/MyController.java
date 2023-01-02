package sjn.barusu.mywebpage.controller;

import com.google.api.services.sheets.v4.model.Sheet;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import sjn.barusu.mywebpage.sheets.sheets;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

@Controller
public class MyController {

    @GetMapping("/")
    public String index(Model model) throws GeneralSecurityException, IOException {
        return "index";
    }

    @GetMapping("/for-trade")
    public String fortrade(Model model) throws GeneralSecurityException, IOException {
        List<Sheet> ftsheets = sheets.getSheetNames();
        for(Sheet sheet : ftsheets){
            model.addAttribute(sheet.getProperties().getTitle().replaceAll("\\s+", "").toLowerCase(), sheets.getData(sheet.getProperties().getTitle() + "!A1:T"));
        }
        return "fortrade.html";
    }

    @GetMapping("/eventsFT")
    public String eventsFT(Model model) throws GeneralSecurityException, IOException {
        List<Sheet> ftsheets = sheets.getSheetNames();
        for(Sheet sheet : ftsheets){
            model.addAttribute(sheet.getProperties().getTitle().replaceAll("\\s+", "").toLowerCase(), sheets.getData(sheet.getProperties().getTitle() + "!A1:T"));
        }
        return "eventsFT.html";
    }

    @GetMapping("/pokemon")
    public String pokemon(Model model) throws GeneralSecurityException, IOException {
        return "pokemon.html";
    }
}