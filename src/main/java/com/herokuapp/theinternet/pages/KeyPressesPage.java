package com.herokuapp.theinternet.pages;

import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class KeyPressesPage extends BasePageObject {

	private String pageUrl = "http://the-internet.herokuapp.com/key_presses";

	private By KeyPresseslinkLocator = By.linkText("Key Presses");
	
	private By body = By.xpath("//body");
	private By resultTextLocator = By.id("result");

	public KeyPressesPage(WebDriver driver, Logger log) {
		super(driver, log);
	}

	/** Open KeyPressesPage with it's url */
	public void openPage() {
		log.info("Opening page: " + pageUrl);
		openUrl(pageUrl);
		log.info("Page opened!");
	}

	/** Press given key while on this page */
	public void pressKey(Keys key) {
		//presskey method from selenium class
		log.info("Pressing " + key.name());
		pressKey(body, key);
		//this is presskey method inside of pageobject
	}

	/** Get result text */
	public String getResultText() {
		String result = find(resultTextLocator).getText();
		log.info("Result text: " + result);
		return result;
	}

}