package com.herokuapp.theinternet.negativelogintests;

import java.util.Map;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.herokuapp.theinternet.base.CsvDataProviders;
import com.herokuapp.theinternet.base.TestUtilities;
import com.herokuapp.theinternet.pages.LoginPage;
import com.herokuapp.theinternet.pages.WelcomePage;

public class NegativeLogInTests extends TestUtilities {

	
	@Test(priority = 1, dataProvider = "csvReader", dataProviderClass = CsvDataProviders.class)
	public void negativeLogInTest(Map<String, String> testData) {
		//each object from the list (i,e) return list.iterator(); from CsvDataProviders class and 
		//then object inside of the list
		//test data is mapstring,so Map<String, String> was got from CsvDataProviders class
		//because in our dataprovider we created a list of maps, our test is receiving map from our list
		//separate map for each row from our table
		// Data
		
		String no = testData.get("no");
		String username  = testData.get("username");
		String password = testData.get("password");
		String expectedErrorMessage = testData.get("expectedMessage");
		String description = testData.get("description");
		
		log.info("Starting negativeLogInTest #" + no + " for " + description);

		// open main page
		WelcomePage welcomePage = new WelcomePage(driver, log);
		welcomePage.openPage();

		// Click on Form Authentication link
		LoginPage loginPage = welcomePage.clickFormAuthenticationLink();

		// execute negative login
		loginPage.negativeLogIn(username, password);

		// wait for error message
		loginPage.waitForErrorMessage();
		String message = loginPage.getErrorMessageText();

		// Verification
		Assert.assertTrue(message.contains(expectedErrorMessage), "Message doesn't contain expected text.");
	}
}