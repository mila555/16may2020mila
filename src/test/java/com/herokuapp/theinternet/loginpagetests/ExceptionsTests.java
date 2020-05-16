package com.herokuapp.theinternet.loginpagetests;

import static org.testng.Assert.assertFalse;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class ExceptionsTests {

	private WebDriver driver;

	@Parameters({ "browser" })

	@BeforeMethod(alwaysRun = true)
	private void setUp(@Optional("chrome") String browser) {

//		create driver

		switch (browser) {
		case "chrome":

			System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
			driver = new ChromeDriver();
			break;

		case "firefox":

			System.setProperty("webdriver.gecko.driver", "src/main/resources/geckodriver.exe");
			driver = new FirefoxDriver();
			break;

		default:
			System.out.println("Do not know to start" + browser + ", starting chrome instead ");
			System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
			driver = new ChromeDriver();
			break;

		}

//			sleep for three seconds
		sleep(3000);

		// maximize browser window
		driver.manage().window().maximize();

		// implicit wait
		// driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	@Test(priority = 1)
	public void notVisibleTest()

	{

		// In the method, first open the page
		// http://the-internet.herokuapp.com/dynamic_loading/1
		driver.get(" http://the-internet.herokuapp.com/dynamic_loading/1");

		// Then find locator for startbutton and click on it

		WebElement StartButton = driver.findElement(By.xpath("//div[@id= 'start']/button"));
		StartButton.click();

		// Then get finish element Text
		WebElement finishElement = driver.findElement(By.id("finish"));

		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(finishElement));

		String finishText = finishElement.getText();

		// compare actual finish element text with expected 'Hello World' using Test NG
		// assert class
		Assert.assertTrue(finishText.contains("Hello World!"), "Finish Text: " + finishText);

		// StartButton.click();

	}

	@Test(priority = 3)
	public void noSuchElementTest()

	{

		// In the method, first open the page
		// http://the-internet.herokuapp.com/dynamic_loading/1
		driver.get(" http://the-internet.herokuapp.com/dynamic_loading/2");

		// Then find locator for startbutton and click on it

		WebElement StartButton = driver.findElement(By.xpath("//div[@id= 'start']/button"));
		StartButton.click();

		WebDriverWait wait = new WebDriverWait(driver, 10);
		Assert.assertTrue(wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("finish"), "Bye World!")),
				"couldn't verify expected text 'Hello World!'");
//		WebElement finishElement=wait.until(ExpectedConditions.presenceOfElementLocated(By.id("finish"))); 
//
//
//		
//		String finishText = finishElement.getText();
//
//		// compare actual finish element text with expected 'Hello World' using Test NG
//		// assert class
//		Assert.assertTrue(finishText.contains("Hello World!"), "Finish Text: " + finishText);

		// StartButton.click();

	}

	@Test(priority = 2)
	public void timeoutTest()

	{

		// In the method, first open the page
		// http://the-internet.herokuapp.com/dynamic_loading/1
		driver.get("http://the-internet.herokuapp.com/dynamic_loading/1");

		// Then find locator for startbutton and click on it

		WebElement StartButton = driver.findElement(By.xpath("//div[@id= 'start']/button"));
		StartButton.click();

		// Then get finish element Text
		WebElement finishElement = driver.findElement(By.id("finish"));

		WebDriverWait wait = new WebDriverWait(driver, 2);
		try {
			wait.until(ExpectedConditions.visibilityOf(finishElement));
		} catch (TimeoutException exception) {
			// TODO Auto-generated catch block
			// e.printStackTrace();
			System.out.println("Exception catched: " + exception.getMessage());
			sleep(3000);
		}

		String finishText = finishElement.getText();

		// compare actual finish element text with expected 'Hello World' using Test NG
		// assert class
		Assert.assertTrue(finishText.contains("Hello World!"), "Finish Text:" + finishText);

		// StartButton.click();

	}

	@Test
	public void staleElementTest() {

		driver.get("https://the-internet.herokuapp.com/dynamic_controls");

		WebElement checkbox = driver.findElement(By.id("checkbox"));
		WebElement removeButton = driver.findElement(By.xpath("//button[contains(text(),'Remove')]"));

		WebDriverWait wait = new WebDriverWait(driver, 10);
		removeButton.click();

//		//wait.until(ExpectedConditions.invisibilityOf(checkbox));

//		
		// Assert.assertFalse(checkbox.isDisplayed());
		// it will fail because checkbox will no longer be there in the webpage
		// for selenium to interact with it

		// Assert.assertTrue(wait.until(ExpectedConditions.invisibilityOf(checkbox)),"checkbox
		// is still visible,but shouldn't be");

		// this will work

		Assert.assertTrue(wait.until(ExpectedConditions.stalenessOf(checkbox)),
				"checkbox is still visible but shouldn't be");
		
		// staleness happens when an element is entirely deleted from a page or when a page is refreshed
		//element seems to be there but it is another element in the eyes of webdriver because it lost the reference to the element

	WebElement addButton= driver.findElement(By.xpath("//button[contains(text(),'Add')]"));
	
	addButton.click();
	WebElement checkbox2=wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("checkbox")));
	//now checkbox will referesh it's value and we will be able to use it again
	
	//wait.until(ExpectedConditions.visibilityOf(checkbox));
		/*
		 * didn't work because weblement checkbox was removed from the page and then
		 * new element with same locator ,id and tag was added to the page ,but in
		 * the eyes of webdriver, it is not the same webelement. So assign new object to web element checkbox
		 * or create new web element, so reassign  new value
		 */	
	Assert.assertTrue(checkbox2.isDisplayed(),"checkbox is not visible, but should be");	
	
	}

	
@Test
	public void disabledElementTest() {

		driver.get("https://the-internet.herokuapp.com/dynamic_controls");

		WebElement enableButton = driver.findElement(By.xpath("//button[contains(text(),'Enable')]"));
		WebElement textField = driver.findElement(By.xpath("(//input)[2]"));
		//second input element on the page with index value 2

		enableButton.click();
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(textField));
		
		textField.sendKeys("My name is Mila!");
Assert.assertEquals(textField.getAttribute("value"), "My name is Mila!" );

		
	}

	
	
	
	
	private void sleep(long m) {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
	}

	@AfterMethod(alwaysRun = true)
	private void tearDown() {
		// close browser
		driver.quit();
	}
}
