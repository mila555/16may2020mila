package com.herokuapp.theinternet.loginpagetests;

import org.openqa.selenium.By;
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

public class LoginTests {

	private WebDriver driver;

	@Parameters({ "browser" })

	@BeforeMethod(alwaysRun=true)
	private void setUp(@Optional("chrome") String browser) {
		
//		create driver
		
		switch (browser) {
		case "chrome" :
			
			System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
			 driver = new ChromeDriver();
            break;
            
         case "firefox" :
			
			System.setProperty("webdriver.gecko.driver", "src/main/resources/geckodriver.exe");
			 driver = new FirefoxDriver();
            break;
            
            
            
            
            
            default:
            	System.out.println("Do not know to start"+ browser+", starting chrome instead ");
            	System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
   			 driver = new ChromeDriver();
            	break;
		
		}
			
//			sleep for three seconds
			sleep(3000);

	//maximize browser window
			driver.manage().window().maximize();
			
			//implicit wait
			//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	@Test(priority = 1, groups = { "PositiveTests", "smokeTests" })
	public void positiveloginTest() {
		System.out.println("starting login Test");

		// open test page
		String url = "http://the-internet.herokuapp.com/login";
		driver.get(url);
		System.out.println("page is opened");

//		enter username
		WebElement username = driver.findElement(By.id("username"));
		username.sendKeys("tomsmith");

//		enter password
		WebElement password = driver.findElement(By.name("password"));
		password.sendKeys("SuperSecretPassword!");
		
		WebDriverWait  wait= new WebDriverWait(driver, 10);

//		click login button
		WebElement LoginButton = driver.findElement(By.tagName("button"));
		wait.until(ExpectedConditions.elementToBeClickable(LoginButton));
		LoginButton.click();

		sleep(3000);

//		verifications:

//		new url
		String expectedUrl = "http://the-internet.herokuapp.com/secure";
		String actualUrl = driver.getCurrentUrl();
		Assert.assertEquals(actualUrl, expectedUrl, "Actual page url is not the same as expected");

//		logout button is visible 
		WebElement LogoutButton = driver.findElement(By.xpath("//a[@class='button secondary radius']"));
		Assert.assertTrue(LogoutButton.isDisplayed(), "Logout button is not visible");

//		successful login message
		// WebElement SuccessMessage = driver.findElement(By.cssSelector("#flash"));
		WebElement SuccessMessage = driver.findElement(By.xpath("//div[@id='flash']"));
		String expectedMessage = "You logged into a secure area!";
		String actualMessage = SuccessMessage.getText();
		// Assert.assertEquals(actualMessage,expectedMessage,"Actual message is not the
		// same as expected");
		Assert.assertTrue(actualMessage.contains(expectedMessage),
				"Actual message does not contain expected message.\nActual Message: " + actualMessage
						+ "\nExpected Message:" + expectedMessage);

	}

	@Parameters({ "username", "password", "expectedMessage" })

	@Test(priority = 2, groups = { "NegativeTests", "smokeTests" })
	public void negativeLoginTest(String username, String password, String expectedErrorMessage) {
		// public void loginTest() {
		System.out.println("starting negativeLoginTest with" + username + "and" + password);

		// open test page
		String url = "http://the-internet.herokuapp.com/login";
		driver.get(url);
		System.out.println("page is opened");

//			enter username
		WebElement usernameElement = driver.findElement(By.id("username"));
		usernameElement.sendKeys(username);

//			enter password
		WebElement passwordElement = driver.findElement(By.name("password"));
		passwordElement.sendKeys(password);

//			click login button
		WebElement LoginButton = driver.findElement(By.tagName("button"));
		LoginButton.click();

		sleep(3000);

		// verifications:
		WebElement errorMessage = driver.findElement(By.id("flash"));

		String actualErrorMessage = errorMessage.getText();

		Assert.assertTrue(actualErrorMessage.contains(expectedErrorMessage),
				"Actual error message does not contain expected. \nActual:" + actualErrorMessage + " \nExpected: "
						+ expectedErrorMessage);

	}

	private void sleep(long m) {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@AfterMethod(alwaysRun = true)
	private void tearDown() {
		// close browser
		driver.quit();
	}
}
