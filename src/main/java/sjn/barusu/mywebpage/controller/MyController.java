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

    private final String ftsheet = "1yBbSIe3iBKsKMO73babEC5TarsSjh2hbCt4g_l86MJY";
    private final String farmedsheet = "1MBKJlI5t7bv8IRoFuMdgQBzEgpRe0ZJfX9xTdfK92Y8";
    private final String mycollection = "1XAiwCodJXGrZB95d7hzA7IuN9_mXSFSPDmx2Pses73E";

    @GetMapping("/")
    public String index(Model model) throws GeneralSecurityException, IOException {
        return "index";
    }

    @GetMapping("/eventsFT")
    public String eventsFT(Model model) throws GeneralSecurityException, IOException {
        List<Sheet> ftsheets = sheets.getSheetNames(ftsheet);
        for(Sheet sheet : ftsheets){
            model.addAttribute(sheet.getProperties().getTitle().replaceAll("\\s+", "").toLowerCase(), sheets.getData(sheet.getProperties().getTitle() + "!A1:T", ftsheet));
        }
        return "eventsFT.html";
    }

    @GetMapping("/pokemon")
    public String pokemon(Model model) throws GeneralSecurityException, IOException {
        return "pokemon.html";
    }
}