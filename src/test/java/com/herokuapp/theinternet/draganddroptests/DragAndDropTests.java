package com.herokuapp.theinternet.draganddroptests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.herokuapp.theinternet.base.TestUtilities;
import com.herokuapp.theinternet.pages.CheckboxesPage;
import com.herokuapp.theinternet.pages.DragAndDropPage;

public class DragAndDropTests extends TestUtilities {

	@Test
	public void dragAToBTest() {
		log.info("Starting dragAToBTest");

		// Open DragAndDropPage
		DragAndDropPage dragAndDropPage = new DragAndDropPage(driver, log);
		dragAndDropPage.openPage();
		
		// Drag box A and drop it on box B
		dragAndDropPage.dragAtoB();
		//column A header would be A intially, Column B header would be B once u drag and drop
		//the headers get swapped

		// Verify correct headers in correct boxes
		String columnAText = dragAndDropPage.getColumnAText();
		Assert.assertTrue(columnAText.equals("B"), "Column A header should be B, but it is: " + columnAText);
		
		String columnBText = dragAndDropPage.getColumnBText();
		Assert.assertTrue(columnBText.equals("A"), "Column A header should be B, but it is: " + columnBText);
	}
}