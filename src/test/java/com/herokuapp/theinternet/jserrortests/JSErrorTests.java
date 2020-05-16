package com.herokuapp.theinternet.jserrortests;

import java.util.List;

import org.openqa.selenium.logging.LogEntry;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.herokuapp.theinternet.base.TestUtilities;
import com.herokuapp.theinternet.pages.JSErrorPage;

public class JSErrorTests extends TestUtilities {

	@Test
	public void jsErrorTest() {
		log.info("Starting jsErrorTest");
		SoftAssert softAssert = new SoftAssert();

		// Open JSErrorPage
		JSErrorPage jSErrorPage = new JSErrorPage(driver, log);
		jSErrorPage.openPage();

		// Get logs
		List<LogEntry> logs = getBrowserLogs();
//getting logs from console, getBrowserLogs() methods in our test utilities
		// Verifying there are no JavaScript errors in console
		for (LogEntry logEntry : logs) {
			//for each log entry we will execute next code
			if (logEntry.getLevel().toString().equals("SEVERE")) {
				softAssert.fail("Severe error: " + logEntry.getMessage());
			}
		}
		//softassert because we want to go through all the entries first
		softAssert.assertAll();
	}
}