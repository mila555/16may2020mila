package com.herokuapp.theinternet.pages;

import java.util.List;

import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HoversPage extends BasePageObject {

	private String pageUrl = "http://the-internet.herokuapp.com/hovers";

	private By avatarLocator = By.xpath("//div[@class='figure']");
	private By viewProfileLinkLocator = By.xpath(".//a[contains(text(),'View profile')]");
// ".//a[contains(text(),the dot will look under the second locator because the xpath has totally 3 view profiles
	public HoversPage(WebDriver driver, Logger log) {
		super(driver, log);
	}

	/** Open HoversPage with it's url */
	public void openPage() {
		log.info("Opening page: " + pageUrl);
		openUrl(pageUrl);
		log.info("Page opened!");
	}


	/** Open specified user profile */
	public void openUserProfile(int i) {
		List<WebElement> avatars = findAll(avatarLocator);
		//u are hovering over 3 avatars, our target now in this case would be 2nd
		//avatarlocators are the same for all three
		//we first found all threeavatars,then choosing second and finally perform hoveroverelement action on 2nd avatar
		WebElement specifiedUserAvatar = avatars.get(i - 1);
		//u sent 2 but the numbering in html starts from 0 so u are deducting 1
		hoverOverElement(specifiedUserAvatar);
		specifiedUserAvatar.findElement(viewProfileLinkLocator).click();
		//so the view profile link under specifieduserAvatar alone will be clicked (i,e) 2
	}
}