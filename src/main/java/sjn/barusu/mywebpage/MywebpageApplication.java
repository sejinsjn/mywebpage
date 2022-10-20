package sjn.barusu.mywebpage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import sjn.barusu.mywebpage.sheets.sheets;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

@SpringBootApplication
public class MywebpageApplication {

	public static void main(String[] args) throws GeneralSecurityException, IOException {
		SpringApplication.run(MywebpageApplication.class, args);
	}
}
