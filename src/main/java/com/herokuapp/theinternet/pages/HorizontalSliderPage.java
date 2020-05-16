package com.herokuapp.theinternet.pages;

import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

public class HorizontalSliderPage extends BasePageObject {

	private String pageUrl = "http://the-internet.herokuapp.com/horizontal_slider";

	private By rangeLocator = By.id("range");
	//element that shows text to which slider is set
	private By sliderLocator = By.tagName("input");
//actual slider we need to move
	public HorizontalSliderPage(WebDriver driver, Logger log) {
		super(driver, log);
	}

	/** Open HorizontalSliderPage with it's url */
	public void openPage() {
		log.info("Opening page: " + pageUrl);
		openUrl(pageUrl);
		log.info("Page opened!");
	}

	/** Move slider to specified value */
	public void setSliderTo(String value) {
		log.info("Moving slider to " + value);

		// Move slider normal method
		// Find the xOffset using given value
		// int width = find(sliderLocator).getSize().getWidth();
		//u r getting the width of slider locator
		 //double percent = Double.parseDouble(value) / 5; 
		//3.5 divided by 5 equals 70 perecnt, double will be 0.7 percent
		// int xOffset = (int) (width * percent);
//multiply full width by 0.7 ,number of pixels we need to move our slider,int xoffset number of pixels
		// Actions action = new Actions(driver);
		// action.dragAndDropBy(find(sliderLocator), xOffset, 0).build().perform();
//drag and drop from , instead of to we have xand y offset
		//positive number moves slider left, negative number moves slider right
		// Workaround method
		// Calculate number of steps
		int steps = (int) (Double.parseDouble(value) / 0.5);
		//3.5 divided by 0.5 = 7
		//our step is 0.5,whatever value we recieve we divide by 0.5,how many steps we need to do for moving slider
		//step by step to specific value 
		

		// Perform steps
		pressKey(sliderLocator, Keys.ENTER);
		//presskey on slider locator ,will send enter to activate locator
		for (int i = 0; i < steps; i++) {
			pressKey(sliderLocator, Keys.ARROW_RIGHT);
			// 7 times u push right arrow on ur keyboard to set value to 3.5
			//full width of slider is 129, height is 21 pixel,we are multiplying full width by 0.7
		//to find offset for our slider element
		
		}
	}

	/** Getting slider value */
	public String getSliderValue() {
		String value = find(rangeLocator).getText();
		log.info("Slider value is " + value);
		return value;
	}
}