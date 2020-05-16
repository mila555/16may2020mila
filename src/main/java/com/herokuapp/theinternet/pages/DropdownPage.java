package com.herokuapp.theinternet.pages;

import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DropdownPage extends BasePageObject {

	private By dropdown = By.id("dropdown");

	public DropdownPage(WebDriver driver, Logger log) {
		super(driver, log);
	}

	/** This method selects given option from dropdown */
	public void selectOption(int i) {
		log.info("Selecting option " + i + " from dropdown");
		WebElement dropdownElement = find(dropdown);
		Select dropdown = new Select(dropdownElement);
		//this is a select class from selenium and this will work only if drop down was found in select tag in html

		// There are three ways to use Select class
		// #1
		// dropdown.selectByIndex(i);

		// #2
		dropdown.selectByValue("" + i);
//if you have inspected your drop down options in the html they will show u option value 1 , 2 etc
		// double quotes for converting it into string
		// #3
		// dropdown.selectByVisibleText("Option " + i);
	}

	/** This method returns selected option in dropdown as a string */
	public String getSelectedOption() {
		WebElement dropdownElement = find(dropdown);
		Select dropdown = new Select(dropdownElement);
		String selectedOption = dropdown.getFirstSelectedOption().getText();
		// getFirstSelectedOption() methods is from select class in selenium
		log.info(selectedOption + " is selected in dropdown");
		return selectedOption;
	}

}