package com.herokuapp.theinternet.base;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class TestListener implements ITestListener {
	//class TestListener that implements all methods from ITestListener

	Logger log;
	String testName;
	String testMethodName;

	@Override
	public void onTestStart(ITestResult result) {
		//we are using ITestResult result to get method and method name
		//when test is starting print test method name
		this.testMethodName = result.getMethod().getMethodName();
		log.info("[Starting " + testMethodName + "]");
	}

	@Override
	public void onTestSuccess(ITestResult result) {
		log.info("[Test " + testMethodName + " passed]");
	}

	@Override
	public void onTestFailure(ITestResult result) {
		log.info("[Test " + testMethodName + " failed]");
	}

	@Override
	public void onTestSkipped(ITestResult result) {
		// TODO Auto-generated method stub

	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		// TODO Auto-generated method stub

	}

	@Override
	public void onStart(ITestContext context) {
		this.testName = context.getCurrentXmlTest().getName();
		this.log = LogManager.getLogger(testName);
		//in our code log is printed with test name from test method
		//test name from test suite,here we will create a log with test name from test suite
		//if there are more methods under a test class then Public void onTestStart(ITestResult result)
		//will be executed each time, and for each there will be onTestSuccess or failure
		
		log.info("[TEST " + testName + " STARTED]");
	}

	@Override
	public void onFinish(ITestContext context) {
		log.info("[ALL " + testName + " FINISHED]");
	}

}